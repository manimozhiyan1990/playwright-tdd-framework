import { Page, Locator, expect } from '@playwright/test';
import config from '../../config/config.json' with {type :'json'};

export class WebCommons {
    constructor(private page: Page) { }

    // ===================== LAUNCH =====================
    async launchApplication(): Promise<void> {
        await this.page.goto(config.web.url);
        await this.waitForPageLoad();
        await this.page.setViewportSize({ width: 1920, height: 1080 }); 
        await expect(this.page).toHaveTitle(config.web.title);
    }

    async launchInNewTab(url: string): Promise<Page> {
        const newPage = await this.page.context().newPage();
        await newPage.goto(url);
        return newPage;
    }

    // ===================== LOCATOR =====================
    element(locator: string): Locator {
        return this.page.locator(locator);
    }

    // ===================== ACTIONS =====================
    async click(locator: string): Promise<void> {
        const el = this.element(locator);
        await el.click();
    }

    async doubleClick(locator: string): Promise<void> {
        const el = this.element(locator);
        await el.dblclick();
    }

    async rightClick(locator: string): Promise<void> {
        const el = this.element(locator);
        await el.click({ button: 'right' });
    }

    async hover(locator: string): Promise<void> {
        const el = this.element(locator);
        await el.hover();
    }

    async type(locator: string, text: string): Promise<void> {
        const el = this.element(locator);
        await el.fill(text);
    }

    async enterText(locator: string, text: string): Promise<void> {
        const el = this.element(locator);
        await el.clear();
        await el.fill(text);
    }

    async scrollTo(locator: string): Promise<void> {
        const el = this.element(locator);
        await el.scrollIntoViewIfNeeded();
    }
    // ===================== VALIDATIONS =====================

    // visibility--Boolean Condition
    async isElementDisplayed(locator: string): Promise<boolean> {
        const el = this.element(locator);
        return await el.isVisible();
    }
    //   Disappeared
    async isElementNotDisplayed(locator: string): Promise<boolean> {
        const el = this.element(locator);
        return await el.isHidden();
    }
    // enabled / disabled
    async isEnabled(locator: string): Promise<boolean> {
        const el = this.element(locator);
        return await el.isEnabled();
    }

    // checked (for checkbox / radio)
    async isChecked(locator: string): Promise<boolean> {
        const el = this.element(locator);
        return await el.isChecked();
    }


    // ===================== DROPDOWN =====================
    async selectByValue(locator: string, value: string): Promise<void> {
        const el = this.element(locator);
        await el.selectOption(value);
    }

    // ===================== CHECKBOX =====================
    async setCheckbox(locator: string, status: boolean): Promise<void> {
        const el = this.element(locator);
        if (status) {
            await el.check();
        } else {
            await el.uncheck();
        }
    }

    // ===================== GET TEXT VALUE =====================
    async getText(locator: string): Promise<string | null> {
        const el = this.element(locator);
        return await el.textContent();
    }

    async getAttribute(locator: string, attr: string): Promise<string | null> {
        const el = this.element(locator);
        return await el.getAttribute(attr);
    }
    // value (for input fields)
    async getValue(locator: string): Promise<string> {
        const el = this.element(locator);
        return await el.inputValue();
    }
    async verifyContainsTextTitle(locator: string, expectedText: string): Promise<void> {
    const el = this.element(locator);
    await expect(el).toContainText(expectedText);
}
//  compare actual value with expected value
async compareValue(actualValue: string | null, expectedValue: string): Promise<void> {
    if (actualValue === null) {
        throw new Error('Actual value is null');
    }

    expect(actualValue).toBe(expectedValue);
}
async compareContainsText(locator: string, expectedText: string): Promise<void> {
    const el = this.element(locator);

    await el.waitFor({ state: 'visible' });   
    await expect(el).toContainText(expectedText);
}
    // ===================== FILE =====================
    async uploadFile(locator: string, filePath: string): Promise<void> {
        const el = this.element(locator);
        await el.setInputFiles(filePath);
    }

    // ===================== SCREENSHOT =====================
    async screenshot(path: string, fullPage: boolean = false): Promise<void> {
        await this.page.screenshot({ path, fullPage });
    }

    // ===================== ALERT =====================
    async handleAlert(action: 'accept' | 'dismiss', promptText?: string): Promise<void> {
        this.page.once('dialog', async (dialog) => {
            if (action === 'accept') {
                await dialog.accept(promptText);
            } else {
                await dialog.dismiss();
            }
        });
    }

    // ===================== ASSERTIONS =====================

async verifyTitle(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(expectedTitle);
}

async verifyText(locator: string, expectedText: string): Promise<void> {
    const el = this.element(locator);
    await expect(el).toHaveText(expectedText);
}

async verifyVisible(locator: string): Promise<void> {
    const el = this.element(locator);
    await expect(el).toBeVisible();
}

async verifyEnabled(locator: string): Promise<void> {
    const el = this.element(locator);
    await expect(el).toBeEnabled();
}


// ====================wait=====================
async waitForElement(locator: string, timeout: number = 5000): Promise<void> {
    const el = this.element(locator);
    await el.waitFor({ state: 'visible', timeout });
}   

async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
}
async waitForClickable(locator: string): Promise<void> {
    const el = this.page.locator(locator);
    await el.waitFor({ state: 'visible' });
    await el.waitFor({ state: 'attached' });
}
}