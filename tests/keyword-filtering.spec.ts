import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { ResultsPage } from './pages/resultsPage';
import { SaleAdPage } from './pages/saleAdPage';


test('Keyword filtering', async ({ page }) => {

    // construct each page object 
    const homePage = new HomePage(page);
    const resultsPage = new ResultsPage(page);
    const saleAdPage = new SaleAdPage(page);

    // load the website
    await homePage.load();

    // search for Dublin County
    await homePage.searchForLocation('Dublin County')

    // check that there are results for this location
    await resultsPage.expectResultsForThisLocation('3,042 Properties for Sale in Dublin (County)');

    // filter results using Garage keyword
    await resultsPage.searchForKeyword('garage');

    // check that there are results for this keyword
    await resultsPage.expectResultsForThisLocation('402 Properties for Sale in Dublin (County)')

    // open first ad from the results list
    await resultsPage.tapOnFirstResult();

    // check for `garage` on sale ad page
    await saleAdPage.expectKeywordVisible('garage');
});
