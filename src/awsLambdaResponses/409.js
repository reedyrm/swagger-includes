"use strict";

module.exports = {
  statusCode: '409',
  responseParameters: {
    'method.response.header.Access-Control-Allow-Origin': "'*'",
    'method.response.header.x-mat-correlation': 'integration.response.body.x-mat-correlation',
    'method.response.header.x-vol-correlation': 'integration.response.body.x-mat-correlation'
  },
  responseTemplates: {
    'application/json': "$input.path('$.errorMessage')"
  }
};
