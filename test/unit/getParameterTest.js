'use strict';
let expect = require('chai').expect,
  module = require('../../src/index.js');

describe('When getting parameter', function(){
  it ('should return authorization parameter by string', function(){
    let parameterObject = module.getParameter('authorization');

    expect(parameterObject.name).to.be.equal('Authorization');
  });
  it ('should return x-mat-tenant parameter by string', function(){
    let parameterObject = module.getParameter('x-mat-tenant');

    expect(parameterObject.name).to.be.equal('x-mat-tenant');
  });
  it ('should return x-mat-test parameter by string', function(){
    let parameterObject = module.getParameter('x-mat-test');

    expect(parameterObject.name).to.be.equal('x-mat-test');
  });
  it ('should return x-mat-version parameter by string', function(){
    let parameterObject = module.getParameter('x-mat-version');

    expect(parameterObject.name).to.be.equal('x-mat-version');
  });
  it ('should return x-vol-tenant parameter by string', function(){
    let parameterObject = module.getParameter('x-vol-tenant');

    expect(parameterObject.name).to.be.equal('x-vol-tenant');
  });
  it ('should return x-vol-test parameter by string', function(){
    let parameterObject = module.getParameter('x-vol-test');

    expect(parameterObject.name).to.be.equal('x-vol-test');
  });
});
