//const addCoupon = require("./woocommerce/addCoupon.js");
//const querystring = require("querystring");
//const parseDataRedirect = require("./helpers/parseDataRedirect.js");
const config = require("../config.js");
const WooCommerce = require("woocommerce");
const wooCommerce = new WooCommerce({
  url: "https://simplybeautifulbranding.com",
  consumerKey: "ck_7e6299eff6cb1e3f7f9b3a72e2b8c7015204e3bd",
  secret: "cs_86c161fbede018d5709e4cd9b4158bf745792e2a",
  apiPath: "/wc-api/v3"
});

exports.handler = function(event, context, callback) {
  //const data = querystring.parse(event.body);
  //const redirectParams = parseDataRedirect(data);

  console.log(config.WCkey, config.WCsecret);

  var data = {
    coupon: {
      code: "25off",
      type: "percent",
      amount: "25",
      individual_use: true,
      exclude_sale_items: true,
      minimum_amount: "100.00"
    }
  };
  wooCommerce.post("/coupons", data, function(err, data, res) {
    console.log("Response", res);
  });
  callback(null, {
    statusCode: 200,
    body: "Success!"
  });

  // return addCoupon()
  //   .then(result => {
  //     return {
  //       statusCode: 200,
  //       body: `Success!`
  //       // headers: {
  //       //   Location: `${config.redirectURL}?first_name=${
  //       //     redirectParams.first_name
  //       //   }&last_name=${redirectParams.last_name}&email=${redirectParams.email}`
  //       // }
  //     };
  //   })
  //   .catch(e => {
  //     console.log(e);
  //     return {
  //       statusCode: 400,
  //       body: `There was an error submitting your email address. It might be that you already used this email address to subscribe.`
  //     };
  //   });
};
