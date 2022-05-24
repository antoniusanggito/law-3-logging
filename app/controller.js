exports.echo = (req, res) => {
  if (!req.query.param) {
    res.status(401).send({
      error: "invalid_request",
      message: "no request param",
    });
    return;
  }

  const param = req.query.param;

  res.send(param)
};