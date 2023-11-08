# distilled-technical-task

Table of contents:
1. [Overview](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#overview)
2. [Technical Challenge](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#technical-challenge)
3. [Expected outcome](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#expected-outcome)
4. [Optional task](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#optional-task)
5. [Stack](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#stack)
6. [Installation](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#installation)
7. [Run the tests](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#run-the-tests)
8. [CI / CD pipeline](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#cicd-pipeline)
9. [Demo](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#demo)
10. [Challanges](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#challanges)
11. [Next steps for improvement](https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#next-steps-for-improvement)

<h3>Overview</h3>

The purpose of the assessment is to qualify the candidates for their expertise with automated
testing.
The technical assessment is outlined below. You will be asked to write automated tests
against the Daft website. There is a specific user scenario we offer you to cover. Please use
any testing framework and programming language you are comfortable with. Please include
any setup instructions and clarifying comments.


<h3>Technical Challenge</h3>

Recently there was an issue with the keyword filtering on our website, so we are looking to automate that scenario for production regression testing.
The end to end test is to be as follows: 
1. User is to open Daft homepage (www.daft.ie ),
2. search for a Sale Ad in county Dublin -> check that there are results for this location,
3. apply the “garage” keyword filter -> check that there are results for that filter, then
4. open one search result -> check that the filter was applied correctly (check that the “garage” keyword is there on that advert).

<h3>Expected outcome</h3>
A Github repo with the source code and set up instructions

<h3>Optional task</h3>
Add in a simple CI/CD pipeline that would run that test scheduled or on push.

---

<h3>Stack</h3>
Playwright with Typescript using POM (Page Object Model) design pattern

This repo assumes you have installed `node.js` and `npm`



### Installation

1. Clone the repo using below URL

```sh
https://github.com/Negrescu29/distilled-technical-task
```

2. Navigate to the folder and install npm packages using:

```sh
npm install
```

<h3>Run the tests</h3>

Run tests in headless mode. Runs the end-to-end tests. By default, the tests are run in parallel.

```sh
npx playwright test
```

Run the tests with one worker.

```sh
npx playwright test --workers 1
```

Starts the interactive UI mode.

```sh
npx playwright test --ui
```

Runs the tests only on Desktop Chrome. check **playwright.config.ts** for more details about browsers

```sh
npx playwright test --project=chromium
```

<h3>CI/CD pipeline</h3>

- on pull_request: https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793367378

- on push: https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793393404

<h3>Demo</h3>

![test-headed-mode](https://github.com/Negrescu29/distilled-technical-task/assets/26310646/48e0ba15-8101-4328-b511-20b5c2776196)


---

<h3>Challanges</h3>

- When trying to use `data-testid="description"` on sale ad page it turns out Playwright finds to instances of this `id`, to make things a bit simpler I just used `getByText('garage')).toBeVisible()` to chech if there is a garage mention on the sale ads page.


- I tried to separate the tests and make them independent, atomic tests but for some reason, the tests kept failing. The first idea is something is wrong with how the page status is transmitted from test to test. Out of scope for now but I believe would be beneficial to have the test being independent and not block the whole flow. If something at an earlier stage fails the other functionality won't be tested.
  
<pre>
    
    test.describe('test suite', () => {

    test('test 1', async ({ }) => {
     ...
    });
    
    test('test 2', async ({ }) => {
     ...
    });
    
    test('test 3', async ({ }) => {
     ...
    });

</pre>

- Because of the wrong naming of page files (I had the name **page** in the file name)  GitHub actions weren't able to find a module and it failed. Managed to fix and run the test on pull_request.

<img width="784" alt="Screenshot 2023-11-08 at 04 08 59" src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/09f92dc3-d083-40fd-9a19-324da18ffbb4">

<img width="1493" alt="Screenshot 2023-11-08 at 04 02 32" src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/0a79ced4-1389-4d00-a25e-0169dc8ec72f">



<h3>Next steps for improvement</h3>

1. Refactor this method so it can be used with any result in the list
<pre>
async tapOnFirstResult(){
    await this.resultsList.first().click();
}
</pre>

2. I think there are more sophisticated ways to validate the amount of results returned for a searched location. At the moment I'm expecting to see the text `402 Properties for Sale in Dublin (County)` Also I check if the `[data-testid="search-h1"]` is visible and `ul[data-testid="results"] li.first()` results list is also visible
![why hardcoding the results is not a good idea](https://github.com/Negrescu29/distilled-technical-task/assets/26310646/2e07f3d6-4f32-4749-b5ef-eee8144882a7)


3. Find a better way to manage cookie popups than just clicking on accepting it because the test was once flaky CI/CD pipeline




