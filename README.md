# distilled-technical-task
**Overview**

The purpose of the assessment is to qualify the candidates for their expertise with automated
testing.
The technical assessment is outlined below. You will be asked to write automated tests
against the Daft website. There is a specific user scenario we offer you to cover. Please use
any testing framework and programming language you are comfortable with. Please include
any setup instructions and clarifying comments.

**Technical Challenge**

Recently there was an issue with the keyword filtering on our website, so we are looking to
automate that scenario for production regression testing.
The end to end test is to be as follows: 
1. User is to open Daft homepage (www.daft.ie ),
2. search for a Sale Ad in county Dublin -> check that there are results for this location,
3. apply the “garage” keyword filter -> check that there are results for that filter, then
4. open one search result -> check that the filter was applied correctly (check that the “garage” keyword is there on that advert).

**Expected outcome:** A Github repo with the source code and set up instructions

Optional task:
Add in a simple CI/CD pipeline that would run that test scheduled or on push.

---
Stack: Playwright with Typescript using POM (Page Object Model)

This repo assumes you have installed `node.js` and `npm`
