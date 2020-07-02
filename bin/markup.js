#!/usr/bin/env node

const fs = require('fs');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const UI_PATH = `${__dirname}/../ui`;
const loader = new TwingLoaderFilesystem(UI_PATH);
const twing = new TwingEnvironment(loader);

// @route   GET api/ui
// @desc    Get component by directory name
// @access  Public
const component = name => new Promise((resolve, reject) => {
  // const component = name;
  // const stylesFilePath = `${UI_PATH}/components/${component}/styles.css`;
  // const scriptsFilePath = `${UI_PATH}/components/${component}/scripts.min.js`;

  // let styles = false;
  // let scripts = false;

  // if (fs.existsSync(stylesFilePath)) {
  //   styles = await fs.readFileSync(stylesFilePath, (err, data) => {
  //     if (err) return false;
  //     return data.toString();
  //   });
  // }

  // if (fs.existsSync(scriptsFilePath)) {
  //   scripts = await fs.readFileSync(scriptsFilePath, (err, data) => {
  //     if (err) return false;
  //     return data.toString();
  //   });
  // }

  // try {
  //   const output = twing.render('/layouts/sandbox.twig', {
  //     component,
  //     styles,
  //     scripts
  //   });

  //   fs.writeFile(`${__dirname}/../public/${component}.html`, output, err => {
  //     if (err) throw err;
  //   });

    resolve();
  // } catch (err) {
  //   reject();
  //   throw new Error(err.message);
  // }
});

Promise.all([
  component('button')
]).then(() => {
  console.log('Markup files compiled.');
}).catch(err => {
  console.err(err);
});
