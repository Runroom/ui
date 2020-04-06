const fs = require('fs');
const express = require('express');
const router = express.Router();
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const UI_PATH = `${__dirname}/../../packages/ui`;
const loader = new TwingLoaderFilesystem(UI_PATH);
const twing = new TwingEnvironment(loader);

// @route   GET api/ui
// @desc    Get component by directory name
// @access  Public
router.get('/:component', async (req, res) => {
  const component = req.params.component;
  const stylesFilePath = `${UI_PATH}/components/${component}/styles.css`;
  const scriptsFilePath = `${UI_PATH}/components/${component}/scripts.min.js`;

  let styles = false;
  let scripts = false;

  if (await fs.existsSync(stylesFilePath)) {
    styles = await fs.readFileSync(stylesFilePath, (err, data) => {
      if (err) return false;
      return data.toString();
    });
  }

  if (await fs.existsSync(scriptsFilePath)) {
    scripts = await fs.readFileSync(scriptsFilePath, (err, data) => {
      if (err) return false;
      return data.toString();
    });
  }

  try {
    const output = await twing.render('/layouts/sandbox.twig', {
      component,
      styles,
      scripts
    });

    fs.writeFile(`${__dirname}/../public/${component}.html`, output, (err) => {
      if (err) throw err;
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
