# corvid telemetry sink example for loggly on GAE

[![Build Status](https://travis-ci.org/wix/corvid-loggly-telemetry-adapter.svg?branch=master)](https://travis-ci.org/wix/corvid-loggly-telemetry-adapter)

  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Run tests](#run-tests)
    - [Run locally](#run-locally)
  - [Deploy to App Engine](#deploy-to-app-engine)
  - [Register for Site Monitoring](#register-for-site-monitoring)


## Setup


- Install Node v10 (currently v10.15.3)
- Install git
- `$ git clone https://github.com/wix-incubator/wix/corvid-loggly-telemetry-adapter.git`
- `$ cd wix-telemetry-appengine-loggly`
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

## Register for Site Monitoring
- Once your service is up and running, you can test it using `/is_alive` endpoint.
- Register for Site Monitoring in your wix business manager, 
    - go to Settings -> Site Monitoring -> Connect Monitoring Tools -> Enter your service URL with `/log`