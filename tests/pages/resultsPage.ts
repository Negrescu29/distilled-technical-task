import { expect, type Locator, type Page } from '@playwright/test';

export class ResultsPage {
    readonly page: Page;
    readonly filters: Locator;
    readonly termsInputText: Locator;
    readonly showResultsButton: Locator;
    readonly resultsList: Locator;
    readonly searchResultsCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.filters = page.getByTestId('open-filters-modal');
        this.termsInputText = page.getByTestId('terms-input-text');
        this.showResultsButton = page.getByTestId('filters-modal-show-results-button');
        this.resultsList = page.locator('ul[data-testid="results"] li').first();
        this.searchResultsCount = page.locator('[data-testid="search-h1"]');
    }

    /**
     * this method take in a string that will be used to search for a location
     * @param keyword 
     */
    async searchForKeyword(keyword: string) {
        await this.filters.click();
        await this.termsInputText.fill(keyword);
        await this.termsInputText.press('Enter');
        await this.showResultsButton.click();
    }

    /**
     * this method clicks on first result in the list.
     * it can be refactored to take in a number that will click on an n-th result in the list
     */
    async tapOnFirstResult() {
        await this.resultsList.first().click();
    }

    /**
     * this assertion checks if there are results for a searched location
     * - searchResultCount - is the <h1> element that shows the amount of results
     * - resultsList - is the <ul> element that is shown with results
     * @param result 
     */
    async expectResultsForThisLocation(result: string) {
        await expect(this.searchResultsCount).toBeVisible();
        await expect(this.searchResultsCount).toHaveText(result);
        await expect(this.resultsList).toBeVisible();

        //const firstChild = page.locator('ul[data-testid="results"] li').first();

    }
}