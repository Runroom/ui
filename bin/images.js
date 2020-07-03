#!/usr/bin/env node

const fs = require('fs');
const componentList = require('../express/list.json');

const UI_PATH = `${__dirname}/../ui`;
const IMAGES_PATH = `${__dirname}/../public/images`;

const copyImage = async name => {
  const imagesPath = `${UI_PATH}/components/${name}/${name}.jpg`;
  const imagesNewPath = `${IMAGES_PATH}/${name}.jpg`;

  // try {
  //   await fs.existsSync(stylesFilePath)
  // } catch {
  //   return false;
  // }

  if (!fs.existsSync(IMAGES_PATH)) {
    fs.mkdirSync(IMAGES_PATH);
  }

  return new Promise((resolve, reject) => {
    fs.copyFile(imagesPath, imagesNewPath, err => {
      if (err) {
        reject();
        throw new Error(err.message);
      }
      resolve();
    });
  });
};

const promises = [
  copyImage('switch')
];

// Object.keys(componentList).map(key => {
//   componentList[key].map(component => {
//     const name = component.name.toLowerCase().replace(' ', '-');
//     promises.push(copyImage(name));
//   });
// });

Promise.all(promises)
  .then(() => {
    console.log('Images files copied.');
  }).catch(err => {
    console.error(err);
  });
