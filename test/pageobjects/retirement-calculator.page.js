

const Page = require('./page');

class RetirementCalculator extends Page {
    /**
     * define selectors using getter methods
     */
    get inputCurrentAge () {
        return $('#current-age');
    }

    get inputRetirementAge() {
        return $('#retirement-age')
    }

    get inputCurrentIncome () {
        return $('#current-income');
    }

    get inputSpouseIncome () {
        return $('#spouse-income');
    }

    get inputCurrentTotalSavings () {
        return $('#current-total-savings');
    }

    get inputCurrentAnnualSavings () {
        return $('#current-annual-savings');
    }

    get inputSavingsIncreaseRate () {
        return $('#savings-increase-rate');
    }

    get checkboxYesSocialBenefits() {
        return $('#yes-social-benefits')
    }

    get checkboxNoSocialBenefits() {
        return $('#no-social-benefits')
    }

    get checkboxMarried() {
        return $('#married')
    }

    get checkboxSingle() {
        return $('#single')
    }
    
    get inputSocialSecurityOverride () {
        return $('#social-security-override');
    }

    get btnSubmitForm () {
        return $('[data-tag-id="submit"]');
    }

    get resultSection() {
        return $('#calculator-results-section')
    }
    
    get resultChart() {
        return $('#results-chart')
    }
    
    get btnEditInfo() {
        return $('[onclick="navigateToRetirementForm();"]')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new RetirementCalculator();
