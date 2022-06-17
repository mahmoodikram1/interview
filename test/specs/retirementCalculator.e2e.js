const RetirementCalculator = require('../pageobjects/retirement-calculator.page');

describe('Retirement Saving Calculator', async () => {

    it('User should be able to submit form with all required fields filled in', async () => {
        await browser.maximizeWindow();
        await RetirementCalculator.open();

        await RetirementCalculator.inputCurrentAge.setValue(40)
        await RetirementCalculator.inputRetirementAge.setValue(68)
        await RetirementCalculator.inputCurrentIncome.setValue(100000)
        await RetirementCalculator.inputCurrentTotalSavings.setValue(500000)
        await RetirementCalculator.inputCurrentAnnualSavings.setValue(10)
        await RetirementCalculator.inputSavingsIncreaseRate.setValue(.25)
        await RetirementCalculator.btnSubmitForm.click()

        await expect(RetirementCalculator.resultChart).toBeDisplayed()
        await expect(RetirementCalculator.resultSection).toBeDisplayed()
    });

    it('Additional Social Security fields should display/hide based on Social Security benefits toggle', async () => {
        await RetirementCalculator.open();

        await RetirementCalculator.checkboxYesSocialBenefits.click()

        await expect(RetirementCalculator.inputSocialSecurityOverride).toBeDisplayed();
    })

    it('User should be able to submit form with all fields filled in', async () => {
        await RetirementCalculator.open();

        await RetirementCalculator.inputCurrentAge.setValue(40)
        await RetirementCalculator.inputRetirementAge.setValue(68)
        await RetirementCalculator.inputCurrentAnnualSavings.setValue(100000)
        await RetirementCalculator.inputSpouseIncome.setValue(75000)
        await RetirementCalculator.inputCurrentTotalSavings.setValue(500000)
        await RetirementCalculator.inputCurrentAnnualSavings.setValue(10)
        await RetirementCalculator.inputSavingsIncreaseRate.setValue(.25)
        await RetirementCalculator.checkboxYesSocialBenefits.click()
        await RetirementCalculator.checkboxMarried.click()
        await RetirementCalculator.inputSocialSecurityOverride.setValue(4000)
        await RetirementCalculator.btnSubmitForm.click()

        await expect(RetirementCalculator.resultChart).toBeDisplayed()
        await expect(RetirementCalculator.resultSection).toBeDisplayed()
    })

    it('User should be able to update default calculator values', async () => {
        await browser.maximizeWindow();
        await RetirementCalculator.open();
        await RetirementCalculator.inputCurrentAge.setValue(40)
        await RetirementCalculator.inputRetirementAge.setValue(68)
        await RetirementCalculator.inputCurrentIncome.addValue(100000)
        await RetirementCalculator.inputCurrentTotalSavings.setValue(500000)
        await RetirementCalculator.inputCurrentAnnualSavings.setValue(10)
        await RetirementCalculator.inputSavingsIncreaseRate.setValue(.25)
        await RetirementCalculator.btnSubmitForm.click()

        await expect(RetirementCalculator.resultChart).toBeDisplayed()
        await expect(RetirementCalculator.resultSection).toBeDisplayed()

        await RetirementCalculator.btnEditInfo.click()
        await RetirementCalculator.inputCurrentAge.setValue(48)
        await RetirementCalculator.inputRetirementAge.setValue(72)
        await RetirementCalculator.inputCurrentIncome.addValue(200000)
        await RetirementCalculator.inputCurrentTotalSavings.setValue(600000)
        await RetirementCalculator.inputCurrentAnnualSavings.setValue(12)
        await RetirementCalculator.inputSavingsIncreaseRate.setValue(.26)
        await RetirementCalculator.btnSubmitForm.click()

        await expect(RetirementCalculator.resultChart).toBeDisplayed()
        await expect(RetirementCalculator.resultSection).toBeDisplayed()
    })
});


