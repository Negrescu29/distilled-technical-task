import { expect, type Locator, type Page } from '@playwright/test';

export class SaleAdPage {
    readonly page: Page;
    readonly keyword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.keyword = page.locator('[data-testid="description"]');
    }

    /**
     * this method takes a string as a parameter that will 
     * represent the searched keyword in the filters modal
     * @param keyword 
     */
    async expectKeywordVisible(keyword: string) {
        await expect(this.keyword).toContainText(keyword);
        //await expect(this.keyword).toBeVisible();
    }
}
