const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUpTCtAhAGHDbgulX3anNaf1chat5I2UoIyYpsMSMY8t962HfqwSY5CMxVNIJa9TDMO0_mbKLTRitU3f",
  client_secret: "ECs5_l_g8gBMZOG1jN06O6Ya19a8VdpNJafd20VytQcsq3mc24MbDCuKfSpKOYiqrj_l301fN14kw4OF",
});

module.exports = paypal;
