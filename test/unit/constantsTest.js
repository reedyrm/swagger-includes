"use strict";
var expect = require('chai').expect;
var module = require('../../src/index.js');

describe('When accessing constants', function() {
  it('should have be able to access integration short name', () => {

    expect(module.constants.env.INTEGRATION.ShortName).to.be.equal('int');
  });

  it('should have be able to access integration short name', () => {

    expect(module.constants.env.INTEGRATION.FullName).to.be.equal('Integration');
  });

  it('should have be able to access integration host', () => {

    expect(module.constants.env.INTEGRATION.Host).to.be.equal('dev.api.material.com');
  });

  it('should have be able to access production short name', () => {

    expect(module.constants.env.PRODUCTION.ShortName).to.be.equal('prod');
  });

  it('should have be able to access production short name', () => {

    expect(module.constants.env.PRODUCTION.FullName).to.be.equal('Production');
  });

  it('should have be able to access production host', () => {

    expect(module.constants.env.PRODUCTION.Host).to.be.equal('api.material.com');
  });
});
