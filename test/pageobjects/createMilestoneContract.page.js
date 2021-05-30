const faker = require('faker');
const Page = require('./page');
const DashboardPage = require('../pageobjects/dashboard.page');

class CreateMilestoneContractPage extends Page {
  get cardMilestoneContract() { return $('a[href="/create/milestone"]') }
  get inputContractName() { return $('input[placeholder="Untitled contract"]') }
  get inputContractScope() { return $('textarea[name="scope"]') }
  get selectDate() { return $('div[name="effectiveDate"]') }
  get selectToday() {return $('button[class*="react-calendar__tile--now"]') }
  get btnSubmit() { return $('button[type="submit"]') }
  get inputRate() { return $('input[class="input-with-select"]') }
  get inputMilestoneTitle() { return $('input[placeholder="Social media posts"]') }
  get selectDropDown() {return $$('div[class*="select__dropdown-indicator"]') }
  get selectGBP() {return $('div=GBP - British Pound') }
  get btnNext() { return $('div=next') }
  get btnAddASpecialClause() {return $('div=add a special clause') }
  get inputSpecialClause() { return $('textarea[class*="textarea"]') }
  get selectUSA() {return $('div=United States') }
  get selectColorado() {return $('div=Colorado') }
  get btnCreateContract() { return $('div=create contract') }
  get btnReviewAndSign() { return $('div=review & sign') }

  async createContract(contractName) {
    await (await DashboardPage.createAContract).click();

    await (await this.cardMilestoneContract).click();

    await (await this.inputContractName).setValue(contractName);
    await (await this.inputContractScope).setValue(faker.lorem.words(10));
    await (await this.selectDate).click();
    await (await (await this.selectToday).waitForDisplayed());
    await (await(await this.selectToday).previousElement()).click();
    await (await (await this.btnSubmit).waitForClickable());
    await (await this.btnSubmit).click();

    await (await (await this.inputRate).waitForDisplayed());
    await (await this.inputRate).setValue('1000');
    await (await this.inputMilestoneTitle).setValue(faker.lorem.word());
    await (await this.selectDropDown)[0].click();
    await (await this.selectGBP).click();
    await (await (await this.btnNext).waitForClickable());
    await (await this.btnNext).click();

    await (await this.btnAddASpecialClause).click();
    await (await this.inputSpecialClause).setValue(faker.lorem.words(10));
    await (await (await this.btnNext).waitForClickable());
    await (await this.btnNext).click();

    await (await this.selectDropDown)[0].click();
    await (await this.selectUSA).click();
    await (await this.selectDropDown)[1].click();
    await (await this.selectColorado).click();
    await (await this.btnCreateContract).click();

    await (await (await this.btnReviewAndSign).waitForDisplayed());
    await (await (await DashboardPage.contracts).waitForDisplayed());
    await (await DashboardPage.contracts).click();
  }
}

module.exports = new CreateMilestoneContractPage();
