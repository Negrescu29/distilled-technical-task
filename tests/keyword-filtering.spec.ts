import { test, expect } from './fixtures/daft-fixture';

test.describe('Keyword filtering on daft website', () => {
    const location = 'Dublin County';
    const results = '3,020 Properties for Sale in Dublin (County)';
    const resultsWithKeyword = '400 Properties for Sale in Dublin (County)';


    test('Check keyword filtered sell ads are return in the result list', async (
        { homePage, resultsPage, saleAdPage }) => {

        // load the website
        await homePage.load();

        // search for Dublin County
        await homePage.searchForLocation(location);

        // check that there are results for this location
        await resultsPage.expectResultsForThisLocation(results);

        // filter results using Garage keyword
        await resultsPage.searchForKeyword('garage');

        // check that there are results for this keyword
        await resultsPage.expectResultsForThisLocation(resultsWithKeyword);

        // open first ad from the results list
        await resultsPage.clickOnFirstResult();

        // check for `garage` on sale ad page
        await saleAdPage.expectKeywordVisible('garage');
    });

});





