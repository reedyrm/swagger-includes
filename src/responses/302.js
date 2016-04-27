"use strict";

module.exports = {
  "description": "Redirect",
  "headers": {
    "x-vol-correlation": {
      "type": "string",
      "description": "the correlation id"
    },
    "x-mat-correlation": {
      "type": "string",
      "description": "The correlation identifier."
    },
    "Access-Control-Allow-Origin": {
      "type": "string"
    },
    "Location": {
      "type": "string"
    }
  }
};
