# distilled-technical-task
<h1>Overview</h1>

The purpose of the assessment is to qualify the candidates for their expertise with automated
testing.
The technical assessment is outlined below. You will be asked to write automated tests
against the Daft website. There is a specific user scenario we offer you to cover. Please use
any testing framework and programming language you are comfortable with. Please include
any setup instructions and clarifying comments.


<h1>Technical Challenge</h1>

Recently there was an issue with the keyword filtering on our website, so we are looking to automate that scenario for production regression testing.
The end to end test is to be as follows: 
1. User is to open Daft homepage (www.daft.ie ),
2. search for a Sale Ad in county Dublin -> check that there are results for this location,
3. apply the “garage” keyword filter -> check that there are results for that filter, then
4. open one search result -> check that the filter was applied correctly (check that the “garage” keyword is there on that advert).

<h1>Expected outcome</h1>
A Github repo with the source code and set up instructions

<h3>Optional task</h3>
Add in a simple CI/CD pipeline that would run that test scheduled or on push.

---

<h3>Stack</h3>
Playwright with Typescript using POM (Page Object Model) design pattern

This repo assumes you have installed `node.js` and `npm`

<h3>How to run tests</h3>

- `npx playwright test` - run tests in headless mode. Runs the end-to-end tests. By default, the tests are run in parallel.
- `npx playwright test --workers 1` - run the tests with one worker.
- `npx playwright test --ui` - starts the interactive UI mode.
- `npx playwright test --project=chromium`  - runs the tests only on Desktop Chrome. check **playwright.config.ts** for more details about browsers


---


<h3>Challanges</h3>
1. When trying to use `data-testid="description"` on sale ad page it turns out Playwright finds to instances of this `id`, to make things a bit simpler I just used `getByText('garage')).toBeVisible()` to chech if there is a garage mention on the sale ads page
2. I tried to separate the tests and make them independent, atomic tests but for some reason, the tests kept failing. The first idea is something is wrong with how the page status is transmitted from test to test. Out of scope for now but I believe would be beneficial to have the test being independent and not block the whole flow. If something at an earlier stage fails the other functionality won't be tested.
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


<h3>Ideas for improvement</h3>
1. Refactor this method so it can be used with any result in the list
<pre>
async tapOnFirstResult(){
    await this.resultsList.first().click();
}
</pre>

2. I think there are more sophisticated ways to validate the amount of results returned for a searched location. At the moment I'm expecting to see the text `402 Properties for Sale in Dublin (County)` Also I check if the `[data-testid="search-h1"]` is visible and `ul[data-testid="results"] li.first()` results list is also visible


