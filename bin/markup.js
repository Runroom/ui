#!/usr/bin/env node

const fs = require('fs');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const UI_PATH = `${__dirname}/../ui`;
const loader = new TwingLoaderFilesystem(UI_PATH);
const twing = new TwingEnvironment(loader);

// @route   GET api/ui
// @desc    Get component by directory name
// @access  Public
const component = async (name) => {
  const component = name;
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

  const output = await twing.render('/layouts/sandbox.twig', {
    component,
    styles,
    scripts
  });

  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/../public/${component}.html`, output, err => {
      if (err) {
        reject();
        throw new Error(err.message);
      }
      console.log(`Component: ${component} compiled`);
      resolve();
    });
    console.log('After writefile');
  });
};

Promise.all([
  component('button')
]).then(() => {
  console.log('Markup files compiled.');
}).catch(err => {
  console.error(err);
});
