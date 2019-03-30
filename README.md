# wix-code telemetry sink example for loggly on GAE

[![Build Status](https://travis-ci.org/wix-incubator/wix-telemetry-appengine-loggly.svg?branch=master)](https://travis-ci.org/wix-incubator/wix-telemetry-appengine-loggly)

- [wix-code telemetry sink example for google appengine](#wix-code-telemetry-sink-example-for-google-appengine)
  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Running the tests](#running-the-tests)
    - [Running locally](#running-locally)
  - [Deploying to App Engine](#deploying-to-app-engine)



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

#### Running the tests

    npm run test
    
#### Running locally
    
    npm start

## Deploying to App Engine

    npm run deploy
