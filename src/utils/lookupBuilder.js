"use strict";
let FS = require('fs');
let __ = require('lodash');
let path = require('path');


module.exports = function(folderPath) {

  //check that path exists
  FS.accessSync(folderPath, FS.F_OK);

  let lookup = {};

  //console.log(`Lookup Folder: ${folderPath}`);
  let parameters = FS.readdirSync(folderPath);

  //console.log(`Lookup File List: ${parameters}`);

  __.each(parameters, function(element) {
    if (__.endsWith(element,'.js')) {
      let key = path.basename(element, '.js').toLowerCase();

      try {
        lookup[key] = require(path.resolve(folderPath, element));
      } catch(err) {
        throw err;
      }
    }
  });

  return lookup;
};
