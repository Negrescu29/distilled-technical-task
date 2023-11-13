import { expect, type Locator, type Page } from '@playwright/test';

export class SaleAdPage {
    readonly page: Page;
    readonly keyword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.keyword = page.locator('.styles__StandardParagraph-sc-15fxapi-8.eMCuSm');
    }

    /**
     * this method takes a string as a parameter that will 
     * represent the searched keyword in the filters modal
     * @param keyword 
     */
    async expectKeywordVisible(keyword: string) {
        // Get the text content of the description element
        const elementText = await this.keyword.textContent();

        await expect(new RegExp(`\\b${keyword}\\b`).test(elementText)).toBeTruthy();

        // Check if the keyword exists in the text
        //await expect(elementText).toContain(keyword);
        //await expect(this.keyword).toBeVisible();
    }
}
