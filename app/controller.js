const winston = require('winston');
require('winston-logstash');

winston.add(winston.transports.Logstash, {
  port: 10194,
  host: '46844509-c4df-4418-b7db-61abd1ecd859-ls.logit.io',
  ssl_enable: true,
  max_connect_retries: -1,
});

exports.echo = (req, res) => {
  if (!req.query.param) {
    res.status(401).send({
      error: "invalid_request",
      message: "no request param",
    });
    return;
  }

  const param = req.query.param;

  winston.info("Param:", param);

  res.send(param)
};