# wix-code telemetry sink example for loggly on GAE

[![Build Status](https://travis-ci.org/wix-incubator/wix-telemetry-appengine-loggly.svg?branch=master)](https://travis-ci.org/wix-incubator/wix-telemetry-appengine-loggly)

  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Run tests](#run-tests)
    - [Run locally](#run-locally)
  - [Deploy to App Engine](#deploy-to-app-engine)



## Setup

- Follow GCP instructions for [creating a google app engine standard environment for node.js](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart).
- [Set up authentication for loggly over http](https://www.loggly.com/docs/token-based-api-authentication/) by adding a `secret.json` with the following format: 
        ```
        {
          "TOKEN": YOUR_LOGGLY_TOKEN
        }
        ```
 

## Development

#### Install

Before you can run or deploy the sample, you need to install:

    npm i

#### Run tests

    npm run test
    
#### Run locally
    
    npm start

## Deploy to App Engine

    npm run deploy
