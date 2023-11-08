import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { ResultsPage } from '../pages/results';
import { SaleAdPage } from '../pages/sale-ad';

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