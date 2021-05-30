# autoQA
![Test](https://github.com/azupatrick0/autoQA/workflows/Test/badge.svg)
# TEST STRATEGY
## Feature to be tested
- An individual client should be able to create a fixed contract
- An individual client should be able to create a milestone contract

## Feature not to be tested
- An individual client should be able to create a pay as you go contract

# Test Objective
The test objectives are to verify the functionality of  creating a contract module, we are focusing on testing operations such as creating a fixed contract, to guarantee all these operations can work normally in real business environment.

# Tools to handle the tests
- WDIO
- Mocha
- Allure Framework
- Node JS 14.17.0

# Test Criteria
## Entry Criteria
- Staging environment is running successfully

## Exit Criteria
- Test ran successfully
- All test cases passed

# Environment Variables
The expected ENV variables are:

- `STAGING_URL`: the staging environment url

set it by adding a .env file with STAGING_URL=value or editing the .env.example file
# Executing tests
## Local
- Checkout to code dir
- Install  node modules, run ```npm install```
- For test, run ```npm test```
- For test report run ```npm test:report```

## Remote
- Tests run on Github Actions on every push

## Headless vs Headful
- To run test in headful mode comment out line 21 from wdio.conf.js, else uncomment it to run test in headless mode