const { addFeature } = require('@wdio/allure-reporter').default;
const faker = require('faker');
const LoginPage = require('../../pageobjects/login.page');
const DashboardPage = require('../../pageobjects/dashboard.page');
const CreateFixedContractPage = require('../../pageobjects/createFixedContract.page');

describe('Create Fixed Contract', () => {
  it('should create a fixed contract', async () => {
    addFeature('should create a fixed contract');

    const contractName = faker.lorem.word();
    const contract = $(`h4=${contractName}`);

    await LoginPage.open();
    await LoginPage.login('azupatrick0@gmail.com', 'Matrix66@@');
    await expect(DashboardPage.createAContract).toBeExisting();
    await expect(DashboardPage.createAContract).toHaveText(
      'Create a Contract');

    await CreateFixedContractPage.createContract(contractName);
    await expect(await contract).toBeExisting();
    await expect(await contract).toHaveText(contractName);
  });
});
