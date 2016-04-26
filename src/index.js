"use strict";
let path = require('path');
let lookupBuilder = require('./utils/lookupBuilder.js');
let corsGenerator = require('./generators/cors.js');
let constants = require('./constants.js');
module.exports = function() {

  //generate lookups
  let parameterLookup = lookupBuilder(path.resolve(__dirname, 'parameters'));
  let responseLookup = lookupBuilder(path.resolve(__dirname, 'responses'));
  let awsResponseLookup = lookupBuilder(path.resolve(__dirname, 'awsResponses'));
  let headerLookup = lookupBuilder(path.resolve(__dirname, 'headers'));
  let awsLambdaResponseLookup = lookupBuilder(path.resolve(__dirname, 'awsLambdaResponses'));

  return {
    constants: constants,
    getParameter: (parameterToGet) => {
      return parameterLookup[parameterToGet];
    },
    getResponse: (responseToGet) => {
      return responseLookup[responseToGet];
    },
    getAwsResponse: (responseToGet) => {
      return awsResponseLookup[responseToGet];
    },
    getAwsLambdaResponse: (responseToGet) => {
      return awsLambdaResponseLookup[responseToGet];
    },
    getHeader: (headerToGet) => {
      return headerLookup[headerToGet];
    },
    generateCORS: (allowedHeaders, allowedVerbs, allowedParameters) => {
      return corsGenerator(allowedHeaders, allowedVerbs, allowedParameters);
    }
  }
}();
