import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly termsAndCondition: Locator;
    readonly searchField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.termsAndCondition = page.getByLabel('Agree and close: Agree to our data processing and close');
        this.searchField = page.getByTestId('county-area-filter');
    }

    // loading the daft.ie web page and accepting T&C
    async load() {
        await this.page.goto('https://www.daft.ie/');
        await this.termsAndCondition.click();
    }

    /* 
    searching for a location that takes a string as a parameter
    in our case that will be Dublin County
    */
    async searchForLocation(location: string) {
        await this.searchField.fill(location);
        await this.searchField.press('Enter');
    }

}