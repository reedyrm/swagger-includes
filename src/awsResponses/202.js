"use strict";

module.exports = {
  "statusCode": "202",
  "responseParameters": {
    "method.response.header.x-vol-correlation": "integration.response.header.x-vol-correlation",
    "method.response.header.x-mat-correlation": "integration.response.header.x-mat-correlation",
    "method.response.header.location": "integration.response.header.location",
    "method.response.header.Access-Control-Allow-Origin": "'*'"
  },
  "responseTemplates": {
    "application/json": null
  }
};
