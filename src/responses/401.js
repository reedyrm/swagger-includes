"use strict";

module.exports = {
  "description": "Unauthorized",
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
    }
  },
  "schema": {
    "type": "string",
    "description": "nothing"
  }
};
