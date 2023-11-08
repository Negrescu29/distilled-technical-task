<h1 id="distilled-technical-task">distilled-technical-task</h1>
<p>Table of contents:</p>
<ol>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#overview">Overview</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#technical-challenge">Technical Challenge</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#expected-outcome">Expected outcome</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#optional-task">Optional task</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#stack">Stack</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#installation">Installation</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#run-the-tests">Run the tests</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#cicd-pipeline">CI / CD pipeline</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#demo">Demo</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#challanges">Challanges</a></li>
<li><a href="https://github.com/Negrescu29/distilled-technical-task/edit/add-playwright/README.md#next-steps-for-improvement">Next steps for improvement</a></li>
</ol>
<h3>Overview</h3>

<p>The purpose of the assessment is to qualify the candidates for their expertise with automated
testing.
The technical assessment is outlined below. You will be asked to write automated tests
against the Daft website. There is a specific user scenario we offer you to cover. Please use
any testing framework and programming language you are comfortable with. Please include
any setup instructions and clarifying comments.</p>
<h3>Technical Challenge</h3>

<p>Recently there was an issue with the keyword filtering on our website, so we are looking to automate that scenario for production regression testing.
The end to end test is to be as follows: </p>
<ol>
<li>User is to open Daft homepage (<a href="http://www.daft.ie">www.daft.ie</a> ),</li>
<li>search for a Sale Ad in county Dublin -&gt; check that there are results for this location,</li>
<li>apply the “garage” keyword filter -&gt; check that there are results for that filter, then</li>
<li>open one search result -&gt; check that the filter was applied correctly (check that the “garage” keyword is there on that advert).</li>
</ol>
<h3>Expected outcome</h3>
A Github repo with the source code and set up instructions

<h3>Optional task</h3>
Add in a simple CI/CD pipeline that would run that test scheduled or on push.

<hr>
<h3>Stack</h3>
Playwright with Typescript using POM (Page Object Model) design pattern

<p>This repo assumes you have installed <code>node.js</code> and <code>npm</code></p>
<h3 id="installation">Installation</h3>
<ol>
<li>Clone the repo using below URL</li>
</ol>
<pre><code class="language-sh">https://github.com/Negrescu29/distilled-technical-task
</code></pre>
<ol start="2">
<li>Navigate to the folder and install npm packages using:</li>
</ol>
<pre><code class="language-sh">npm install
</code></pre>
<h3>Run the tests</h3>

<p>Run tests in headless mode. Runs the end-to-end tests. By default, the tests are run in parallel.</p>
<pre><code class="language-sh">npx playwright test
</code></pre>
<p>Run the tests with one worker.</p>
<pre><code class="language-sh">npx playwright test --workers 1
</code></pre>
<p>Starts the interactive UI mode.</p>
<pre><code class="language-sh">npx playwright test --ui
</code></pre>
<p>Runs the tests only on Desktop Chrome. check <strong>playwright.config.ts</strong> for more details about browsers</p>
<pre><code class="language-sh">npx playwright test --project=chromium
</code></pre>
<h3>CI/CD pipeline</h3>

<ul>
<li><p>on pull_request: <a href="https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793367378">https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793367378</a></p>
</li>
<li><p>on push: <a href="https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793393404">https://github.com/Negrescu29/distilled-technical-task/actions/runs/6793393404</a></p>
</li>
</ul>
<h3>Demo</h3>

<p><img src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/48e0ba15-8101-4328-b511-20b5c2776196" alt="test-headed-mode"></p>
<hr>
<h3>Challanges</h3>

<ul>
<li><p>When trying to use <code>data-testid=&quot;description&quot;</code> on sale ad page it turns out Playwright finds to instances of this <code>id</code>, to make things a bit simpler I just used <code>getByText(&#39;garage&#39;)).toBeVisible()</code> to chech if there is a garage mention on the sale ads page.</p>
</li>
<li><p>I tried to separate the tests and make them independent, atomic tests but for some reason, the tests kept failing. The first idea is something is wrong with how the page status is transmitted from test to test. Out of scope for now but I believe would be beneficial to have the test being independent and not block the whole flow. If something at an earlier stage fails the other functionality won&#39;t be tested.</p>
</li>
</ul>
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

<ul>
<li>Because of the wrong naming of page files (I had the name <strong>page</strong> in the file name)  GitHub actions weren&#39;t able to find a module and it failed. Managed to fix and run the test on pull_request.</li>
</ul>
<img width="784" alt="Screenshot 2023-11-08 at 04 08 59" src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/09f92dc3-d083-40fd-9a19-324da18ffbb4">

<img width="1493" alt="Screenshot 2023-11-08 at 04 02 32" src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/0a79ced4-1389-4d00-a25e-0169dc8ec72f">



<h3>Next steps for improvement</h3>

<ol>
<li><p>Refactor this method so it can be used with any result in the list</p>
<pre>
async tapOnFirstResult(){
 await this.resultsList.first().click();
}
</pre>
</li>
<li><p>I think there are more sophisticated ways to validate the amount of results returned for a searched location. At the moment I&#39;m expecting to see the text <code>402 Properties for Sale in Dublin (County)</code> Also I check if the <code>[data-testid=&quot;search-h1&quot;]</code> is visible and <code>ul[data-testid=&quot;results&quot;] li.first()</code> results list is also visible
<img src="https://github.com/Negrescu29/distilled-technical-task/assets/26310646/2e07f3d6-4f32-4749-b5ef-eee8144882a7" alt="why hardcoding the results is not a good idea"></p>
</li>
<li><p>Find a better way to manage cookie popups than just clicking on accepting it because the test was once flaky CI/CD pipeline</p>
</li>
</ol>
