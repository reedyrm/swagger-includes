"use strict";
let expect = require('chai').expect;
let module = require('../../src/index.js');

describe('When getting aws response', function () {
  it('should return 400 response by string', () => {
    let statusCode = '400';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 401 aws response by string', () => {
    let statusCode = '401';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 404 aws response by string', () => {
    let statusCode = '404';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 403 aws response by string', () => {
    let statusCode = '403';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 406 aws response by string', () => {
    let statusCode = '406';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 409 aws response by string', () => {
    let statusCode = '409';
    let responseObject = module.getAwsResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });

  it('should return 200 aws response by string', () => {
    let responseToGet = '200';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 201 aws response by string', () => {
    let responseToGet = '201';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.location"]).to.be.equal('integration.response.header.location');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 202 aws response by string', () => {
    let responseToGet = '202';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.location"]).to.be.equal('integration.response.header.location');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 204 aws response by string', () => {
    let responseToGet = '204';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 500 aws response by string', () => {
    let responseToGet = '500';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 501 aws response by string', () => {
    let responseToGet = '501';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 502 aws response by string', () => {
    let responseToGet = '502';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
  it('should return 503 aws response by string', () => {
    let responseToGet = '503';

    let responseObject = module.getAwsResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.header.x-vol-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.header.x-mat-correlation');
    expect(responseObject.responseTemplates["application/json"]).to.be.null;
  });
});
