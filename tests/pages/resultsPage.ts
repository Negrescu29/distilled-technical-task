import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly filtersModal: Locator;
    readonly termsInputText: Locator;
    readonly showResultsButton: Locator;
    readonly resultsList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.filtersModal = page.getByTestId('open-filters-modal');
        this.termsInputText = page.getByTestId('terms-input-text');
        this.showResultsButton = page.getByTestId('filters-modal-show-results-button');
        this.resultsList = page.locator('ul[data-testid="results"] li');
    }

    /**
     * this method take in a string that will be used to search for a location
     * @param keyword 
     */
    async searchForKeyword(keyword: string) {
        await this.filtersModal.click();
        await this.termsInputText.fill(keyword);
        await this.termsInputText.press('Enter');
        await this.showResultsButton.click();
    }

    /**
     * this method clicks on first result in the list.
     * it can be refactored to take in a number that will click on an n-th result in the list
     */
    async tapOnFirstResult(){
        await this.resultsList.first().click();
    }
}