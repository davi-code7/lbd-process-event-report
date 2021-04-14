const Orchtbase = require("orchy-base-code7");

("use strict");

module.exports.processEventReport = async (event) => {
  const body = JSON.parse(event.Records[0].body);
  const message = JSON.parse(body.Message);

  const orchybase = new Orchtbase.default();

  return event;
};
