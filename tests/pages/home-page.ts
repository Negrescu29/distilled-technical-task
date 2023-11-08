import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly termsAndCondition: Locator;
    readonly searchBox: Locator;
    readonly resultDropDownItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.termsAndCondition = page.getByLabel('Agree and close: Agree to our data processing and close');
        this.searchBox = page.getByTestId('county-area-filter');
        this.resultDropDownItem = page.getByTestId('item');
    }

    /**
     * this method load the daft.ie web page and accepting T&C
     */
    async load() {
        await this.page.goto('https://www.daft.ie/');
        //await this.termsAndCondition.click();
    }

    /**
     * this method takes a string as a parameter that will be used for searching a location that 
     * in our case that will be Dublin County
     * @param location 
     */
    async searchForLocation(location: string) {
        await this.searchBox.fill(location);
        await this.searchBox.press('Enter');
        await this.resultDropDownItem.click();
    }
}