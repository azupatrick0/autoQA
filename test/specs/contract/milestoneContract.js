const { addFeature } = require('@wdio/allure-reporter').default;
const faker = require('faker');
const LoginPage = require('../../pageobjects/login.page');
const DashboardPage = require('../../pageobjects/dashboard.page');
const CreateMilestoneContractPage = require('../../pageobjects/createMilestoneContract.page');

describe('Create Milestone Contract', () => {
  it('should create a milestone contract', async () => {
    addFeature('should create a milestone contract');

    const contractName = faker.lorem.word();
    const contract = $(`h4=${contractName}`);

    await LoginPage.open();
    await LoginPage.login('azupatrick0@gmail.com', 'Matrix66@@');
    await expect(DashboardPage.createAContract).toBeExisting();
    await expect(DashboardPage.createAContract).toHaveText(
      'Create a Contract');

    await CreateMilestoneContractPage.createContract(contractName);
    await expect(await contract).toBeExisting();
    await expect(await contract).toHaveText(contractName);
  });
});
