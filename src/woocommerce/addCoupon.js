const WooCommerce = require("woocommerce");
//const parseData = require("./parseDataMailchimp.js");
const config = require("../../config.js");
const wooCommerce = new WooCommerce({
  url: config.WCurl,
  ssl: true,
  consumer_Key: config.WCkey,
  secret: config.WCsecret,
  apiPath: "/wc-api/v3"
});

console.log(config);

function addCoupon(data) {
  //const params = parseData(data);
  //console.log(params);
  return wooCommerce.post(
    "/coupons",
    {
      code: "15off",
      discount_type: "percent",
      amount: "15",
      individual_use: true,
      exclude_sale_items: true,
      minimum_amount: "100.00"
    },
    function(err, data, res) {
      console.log(res);
    }
  );
}

module.exports = addCoupon;
