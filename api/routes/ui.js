const fs = require('fs');
const express = require('express');
const router = express.Router();
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const UI_PATH = __dirname + '/../../packages/ui';
const loader = new TwingLoaderFilesystem(UI_PATH);
const twing = new TwingEnvironment(loader);

// @route   GET api/ui
// @desc    Get component by directory name
// @access  Public
router.get('/:component', async (req, res) => {
  const component = req.params.component;
  const styles = await fs.readFileSync(
    `${UI_PATH}/components/${component}/styles.css`,
    (err, data) => {
      if (err) console.log(err);
      return data.toString();
    }
  );
  const output = await twing.render('/layouts/sandbox.twig', { component, styles });
  res.send(output);
});

module.exports = router;
