"use strict";
let expect = require('chai').expect;
let module = require('../../src/index.js');

describe('When getting aws response', function () {
  it('should return 400 response by string', () => {
    let statusCode = '400';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });
  it('should return 401 aws response by string', () => {
    let statusCode = '401';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });
  it('should return 404 aws response by string', () => {
    let statusCode = '404';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });
  it('should return 403 aws response by string', () => {
    let statusCode = '403';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });
  it('should return 406 aws response by string', () => {
    let statusCode = '406';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });
  it('should return 409 aws response by string', () => {
    let statusCode = '409';
    let responseObject = module.getAwsLambdaResponse(statusCode);

    expect(responseObject.statusCode).to.be.equal(statusCode);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });

  it('should return 500 aws response by string', () => {
    let responseToGet = '500';

    let responseObject = module.getAwsLambdaResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.path('$.errorMessage')");
  });

  it('should return 200 aws response by string', () => {
    let responseToGet = '200';

    let responseObject = module.getAwsLambdaResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.json('$.body')");
  });
  it('should return 201 aws response by string', () => {
    let responseToGet = '201';

    let responseObject = module.getAwsLambdaResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Location"]).to.be.equal('integration.response.body.location');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("$input.json('$.body')");
  });

  it('should return 204 aws response by string', () => {
    let responseToGet = '204';

    let responseObject = module.getAwsLambdaResponse(responseToGet);

    expect(responseObject.statusCode).to.be.equal(responseToGet);
    expect(responseObject.responseParameters["method.response.header.x-vol-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.x-mat-correlation"]).to.be.equal('integration.response.body.x-mat-correlation');
    expect(responseObject.responseParameters["method.response.header.Access-Control-Allow-Origin"]).to.be.equal("'*'");
    expect(responseObject.responseTemplates["application/json"]).to.be.equal("");
  });

});
