"use strict";

let generatorCors = require('../generators/cors'),
  paramXVolTest = require('../parameters/x-vol-test'),
  paramXVolTenant = require('../parameters/x-vol-tenant'),
  paramXMatTest = require('../parameters/x-mat-test'),
  paramXMatVersion = require('../parameters/x-mat-version'),
  response500 = require('../responses/500'),
  awsResponse200 = require('../awsResponses/200'),
  awsResponse500 = require('../awsResponses/500');

module.exports = {
  "options": generatorCors(['x-vol-tenant', 'x-mat-tenant', 'x-mat-version', 'x-mat-test', 'x-vol-test', 'Content-Type'], ['GET', 'OPTIONS']),
  "get": {
    "tags": ["Health"],
    "summary": "Retrieve health details.",
    "description": "Volusion staff use this resource to monitor platform health.",
    "operationId": "HealthGetAsync",
    "consumes": [],
    "produces": ["application/json"],
    "parameters": [paramXVolTest,
      paramXVolTenant,
      paramXMatTest,
      paramXMatVersion],
    "responses": {
      "200": {
        "description": "OK",
        "headers": {
          "x-vol-correlation": {
            "type": "string",
            "description": "The correlation identifier."
          },
          "Access-Control-Allow-Origin": {
            "type": "string"
          }
        },
        "schema": {
          "type": "object",
          "properties": {
            "isHealthy": {
              "description": "Indicates whether the Material platform is available and processing requests.",
              "type": "boolean"
            },
            "timeStamp": {
              "description": "Displays the date and time of the last health check.",
              "format": "date-time",
              "type": "string"
            }
          }
        }
      },
      "500": response500
    },
    "deprecated": false,
    "x-amazon-apigateway-integration": {
      "type": "http",
      "httpMethod": "GET",
      "uri": "https://${stageVariables.uri}/health",
      "requestParameters": {
        "integration.request.header.x-vol-test": "method.request.header.x-vol-test",
        "integration.request.header.x-mat-test": "method.request.header.x-mat-test",
        "integration.request.header.x-mat-tenant": "method.request.header.x-mat-tenant",
        "integration.request.header.x-mat-version": "method.request.header.x-mat-version",

        "integration.request.header.x-mat-gateway-secret": "'MaterialGateway'"
      },
      "responses": {
        "2\\d{2}": awsResponse200,
        "5\\d{2}": awsResponse500
      }
    }
  }
};
