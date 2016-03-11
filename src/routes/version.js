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
    "tags": ["Version"],
    "summary": "Get the API version",
    "description": "The API version displays in the following format: <em>major</em>.<em>minor</em>.<em>patch</em>.<em>build</em>. This format follows the <a href=\"http://semver.org\" target=\"_blank\">Semantic Versioning 2.0.0 guidelines</a>.",
    "operationId": "VersionGet",
    "consumes": [],
    "produces": ["application/json"],
    "parameters": [
      paramXVolTest,
      paramXVolTenant,
      paramXMatTest,
      paramXMatVersion
    ],
    "responses": {
      "200": {
        "description": "AssemblyVersion",
        "schema": {
          "title": "AssemblyVersion",
          "description": "Contains the Version description information.",
          "type": "object",
          "properties": {
            "version": {
              "description": "The semantic version of the Material API.",
              "type": "string"
            },
            "timeStamp": {
              "format": "date-time",
              "description": "The date and time when the API version was retrieved.",
              "type": "string"
            }
          }
        },
        "headers": {
          "x-vol-correlation": {
            "type": "string",
            "description": "The correlation identifier."
          },
          "Access-Control-Allow-Origin": {
            "type": "string"
          }
        }
      },
      "500": response500
    },
    "deprecated": false,
    "x-amazon-apigateway-integration": {
      "type": "http",
      "httpMethod": "GET",
      "uri": "https://${stageVariables.uri}/version",
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
