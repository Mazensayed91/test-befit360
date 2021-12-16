# Test Befit360

In this simple project, I created 2 scripts to automate:
 - Creating an account
 - Logining with created account

Using data driven testing

## Steps:
 - clone the code
 - move to the project directory and run npm install
 - to run the test cases write npm test/testSuiteYouWant/testScript.js

## Create html report:
 - mocha testSuiteYouWant/testScript.js --reporter mocha-simple-html-reporter --reporter-options output=report.html

## Limitations:
 - To create account, a verification email is sent to the email supplied to the form, so it's hard to login with the created account but we can assume that the account is created without any problems and login with this data.
