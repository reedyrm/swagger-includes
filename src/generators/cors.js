"use strict";

module.exports = function(allowedHeaders, allowedVerbs, allowedParameters) {


  let headers = allowedHeaders || ['x-mat-version','x-mat-test','x-vol-test','Content-Type'];
  let verbs = allowedVerbs || ['OPTIONS'];
  let parameters = allowedParameters || [];

  let result = {
    "tags": ["CORS"],
    "summary": "CORS Support",
    "description": "Enable CORS by returning correct headers",
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "parameters": [],
    "responses": {
      "200": {
        "description": "Default response for CORS method",
        "headers": {
          "Access-Control-Allow-Headers": {
            "type": "string"
          },
          "Access-Control-Allow-Methods": {
            "type": "string"
          },
          "Access-Control-Allow-Origin": {
            "type": "string"
          }
        }
      }
    },
    "x-amazon-apigateway-integration": {
      "type": "mock",
      "requestTemplates": {
        "application/json": "{ \"statusCode\" : 200 }"
      },
      "responses": {
        "default": {
          "statusCode": "200",
          "responseParameters": {
            "method.response.header.Access-Control-Allow-Headers": `'${headers.toString()}'`,
            "method.response.header.Access-Control-Allow-Methods": `'${verbs.toString()}'`,
            "method.response.header.Access-Control-Allow-Origin": "'*'"
          },
          "responseTemplates": {
            "application/json": "{}"
          }
        }
      }
    }
  };

  if(parameters.length > 0){
    result.parameters = parameters;
  }
  else {
    delete result.parameters;
  }


  return result;
};
