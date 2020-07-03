#!/usr/bin/env node

const fs = require('fs');
const componentList = require('../express/list.json');
const UI_PATH = `${__dirname}/../ui`;
const PUBLIC_PATH = `${__dirname}/../public`;

const copyImage = async name => {
  const imagesFilePath = `${UI_PATH}/components/${component}.jpg`;
  // const scriptsFilePath = `${UI_PATH}/components/${component}/scripts.min.js`;

  // let styles = false;
  // let scripts = false;

  // if (await fs.existsSync(stylesFilePath)) {
  //   styles = await fs.readFileSync(stylesFilePath, (err, data) => {
  //     if (err) return false;
  //     return data.toString();
  //   });
  // }

  // if (await fs.existsSync(scriptsFilePath)) {
  //   scripts = await fs.readFileSync(scriptsFilePath, (err, data) => {
  //     if (err) return false;
  //     return data.toString();
  //   });
  // }

  // const output = await twing.render('/layouts/sandbox.twig', {
  //   component,
  //   styles,
  //   scripts
  // });

  // return new Promise((resolve, reject) => {
  //   fs.writeFile(`${PUBLIC_PATH}/${component}.html`, output, err => {
  //     if (err) {
  //       reject();
  //       throw new Error(err.message);
  //     }
  //     resolve();
  //   });
  // });
};

const promises = [];

Object.keys(componentList).map(key => {
  componentList[key].map(component => {
    const { img } = component;
    promises.push(copyImage(name));
  });
});

Promise.all(promises)
  .then(() => {
    console.log('Markup files compiled.');
  }).catch(err => {
    console.error(err);
  });
