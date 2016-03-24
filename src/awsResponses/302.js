"use strict";

module.exports = {
  "statusCode": "302",
  "responseParameters": {
    "method.response.header.x-vol-correlation": "integration.response.header.x-vol-correlation",
    "method.response.header.x-mat-correlation": "integration.response.header.x-mat-correlation",
    "method.response.header.Access-Control-Allow-Origin": "'*'",
    "method.response.header.Location": "integration.response.header.Location",
  },
  "responseTemplates": {
    "application/json": null
  }
};
