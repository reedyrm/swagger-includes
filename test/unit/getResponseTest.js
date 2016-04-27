"use strict";
var chai = require('chai');
var expect = chai.expect;
var module = require('../../src/index.js');

let getHeaderByName = function (name, responseObject) {
  return responseObject.headers[name];
};

describe('When getting response', function () {
  let theCorrelationId = 'the correlation id';
  let theCorrelationIdenty = 'The correlation identifier.';
  let headerXVolCorrName = "x-vol-correlation";
  let headerXMatCorrName = "x-mat-correlation";
  let headerAccessName = "Access-Control-Allow-Origin";

  it('should return 400 response by string', () => {
    let responseObject = module.getResponse('400');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('BadRequest');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');
    
    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 302 response by string', () => {
    let responseObject = module.getResponse('302');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);
    let locationHeader = getHeaderByName('Location', responseObject);
    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('Redirect');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(locationHeader.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 401 response by string', () => {
    let responseObject = module.getResponse('401');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('Unauthorized');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 403 response by string', () => {
    let responseObject = module.getResponse('403');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('Forbidden');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 404 response by string', () => {
    let responseObject = module.getResponse('404');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('NotFound');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 405 response by string', () => {
    let responseObject = module.getResponse('405');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('MethodNotAllowed');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 406 response by string', () => {
    let responseObject = module.getResponse('406');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('NotAccepted');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 409 response by string', () => {
    let responseObject = module.getResponse('409');

    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);
    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('Conflict');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 500 response by string', () => {
    let responseObject = module.getResponse('500');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('ServerError');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });

  it('should return 501 response by string', () => {
    let responseObject = module.getResponse('501');
    let xVolCorrelation = getHeaderByName(headerXVolCorrName, responseObject);

    let xMatCorrelation = getHeaderByName(headerXMatCorrName, responseObject);
    let access = getHeaderByName(headerAccessName, responseObject);
    expect(responseObject.description).to.be.equal('NotImplemented');

    expect(xVolCorrelation.type).to.be.equal('string');
    expect(xMatCorrelation.type).to.be.equal('string');

    expect(xVolCorrelation.description).to.be.equal(theCorrelationId);
    expect(xMatCorrelation.description).to.be.equal(theCorrelationIdenty);

    expect(access.type).to.be.equal('string');

    expect(responseObject.schema.type).to.equal("string");
    expect(responseObject.schema.description).to.equal("nothing");
  });
});
