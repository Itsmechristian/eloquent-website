const url = require("url");

/**
 *
 * @param {Request} req
 * @param {String} src
 */
module.exports = function fullUrl(req, src) {
  return url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: src
  });
};
