#!/usr/bin/env node

const fs = require('fs');
const componentList = require('../express/list.json');
const { resolve } = require('path');
const UI_PATH = `${__dirname}/../ui`;
const PUBLIC_PATH = `${__dirname}/../public`;

const copyImage = async name => {
  const imagesPath = `${UI_PATH}/components/${name}.jpg`;
  const imagesNewPath = `${PUBLIC_PATH}/images/${name}.jpg`;

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

const promises = [];

Object.keys(componentList).map(key => {
  componentList[key].map(component => {
    const name = component.name.toLowerCase().replace(' ', '-');
    promises.push(copyImage(name));
  });
});

Promise.all(promises)
  .then(() => {
    console.log('Images files copied.');
  }).catch(err => {
    console.error(err);
  });
