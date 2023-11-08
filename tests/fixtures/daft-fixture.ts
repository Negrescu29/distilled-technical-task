import { test as base } from '@playwright/test';
import { ResultsPage } from '../pages/resultsPage';
import { SaleAdPage } from '../pages/saleAdPage';
import { HomePage } from '../pages/homePage';

type DaftFixtures = {
    homePage: HomePage;
    resultsPage: ResultsPage;
    saleAdPage: SaleAdPage;
};

export const test = base.extend<DaftFixtures>({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    resultsPage: async ({ page }, use) => {
        await use(new ResultsPage(page));
    },

    saleAdPage: async ({ page }, use) => {
        await use(new SaleAdPage(page));
    },
});

export { expect } from '@playwright/test';