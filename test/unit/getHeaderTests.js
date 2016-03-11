'use strict';
let expect = require('chai').expect,
  module = require('../../src/index');

describe('When getting header', () => {
  it('should return x-mat-correlation by string', () => {
    let headerObject = module.getHeader('x-mat-correlation');

    expect(headerObject.description).to.contain('correlation');
  });

  it('should return location by string', () => {
    let headerObject = module.getHeader('location');

    expect(headerObject.description).to.contain('newly created');
  });
});
