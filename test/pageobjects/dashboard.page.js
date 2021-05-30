const Page = require('./page');

class DashboardPage extends Page {
    get createAContract () { return $('p=Create a Contract') }
    get contracts () { return $('p=Contracts') }
    get contractorEmail () {return $('h6[class="user-tag-detail"]')}
}

module.exports = new DashboardPage();
