require('dotenv').config();

module.exports = class Page {
  open(path) {
    return browser.url(`${process.env.STAGING_URL}/${path}`)
  }
}
