require("dotenv").config();

module.exports = {
  WCurl: process.env.WooCommerceURL,
  WCkey: process.env.WooCommerceKey,
  WCsecret: process.env.WooCommerceSecret
};
