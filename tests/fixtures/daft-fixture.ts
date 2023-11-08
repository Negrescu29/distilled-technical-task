import { test as base } from '@playwright/test';
import * as resultsPage from '../Pages/resultsPage';
import { SaleAdPage } from '../Pages/saleAdPage';
import { HomePage } from '../Pages/homePage';

type DaftFixtures = {
    homePage: HomePage;
    resultsPage: resultsPage.ResultsPage;
    saleAdPage: SaleAdPage;
};

export const test = base.extend<DaftFixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    resultsPage: async ({ page }, use) => {
        await use(new resultsPage.ResultsPage(page));
    },

    saleAdPage: async ({ page }, use) => {
        await use(new SaleAdPage(page));
    },
});

export { expect } from '@playwright/test';