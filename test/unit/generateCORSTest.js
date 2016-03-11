"use strict";
var expect = require('chai').expect;
var module = require('../../src/index.js');

describe('When generatoring CORS', function() {
  it('should generate default OPTIONS route with no parameters', function () {
    let optionsObject = module.generateCORS();

    expect(optionsObject.Parameters).to.be.undefined;
  });
  it('should generate default OPTIONS route with default allow methods', function () {
    let optionsObject = module.generateCORS();

    let responseParameters = optionsObject['x-amazon-apigateway-integration'].responses.default.responseParameters;
    expect(responseParameters['method.response.header.Access-Control-Allow-Methods']).to.be.equal("'OPTIONS'");
  });
  it('should generate default OPTIONS route with default allow headers', function () {
    let optionsObject = module.generateCORS();

    let responseParameters = optionsObject['x-amazon-apigateway-integration'].responses.default.responseParameters;
    expect(responseParameters['method.response.header.Access-Control-Allow-Headers']).to.be.equal("'x-mat-version,x-mat-test,x-vol-test,Content-Type'");
  });
  it('should generate default OPTIONS route with default response template', function () {
    let optionsObject = module.generateCORS();

    let responseTemplates = optionsObject['x-amazon-apigateway-integration'].responses.default.responseTemplates;
    expect(responseTemplates['application/json']).to.be.equal("{}");
  });
  it('should generate OPTIONS with passed in methods', function () {
    let optionsObject = module.generateCORS([], ['GET']);

    let responseParameters = optionsObject['x-amazon-apigateway-integration'].responses.default.responseParameters;
    expect(responseParameters['method.response.header.Access-Control-Allow-Methods']).to.be.equal("'GET'");
  });

  it('should generate OPTIONS with passed in headers', function () {
    let optionsObject = module.generateCORS(['appleHeader','untested-dash-es']);

    let responseParameters = optionsObject['x-amazon-apigateway-integration'].responses.default.responseParameters;
    expect(responseParameters['method.response.header.Access-Control-Allow-Headers']).to.be.equal("'appleHeader,untested-dash-es'");
  });

  it('should generate OPTIONS with passed in parameters', function () {
    let parameter = {
      "name": "id",
      "in": "path",
      "required": true,
      "type": "string"
    };
    let optionsObject = module.generateCORS([],[],[parameter]);


    expect(optionsObject.parameters[0]).to.be.equal(parameter);
  });
});
