const express = require("express");
const router = express.Router();
const url = require("url");

function fullUrl(req, src) {
  return url.format({
    protocol: req.protocol,
    host: req.get("host"),
    pathname: src
  });
}

router.get("/icons", (req, res) => {
  let icons = [
    {
      name: "facebook-icon",
      src: fullUrl(req, "/images/facebook-icon.png")
    },
    {
      name: "twitter-icon",
      src: fullUrl(req, "/images/twitter-icon.png")
    },
    {
      name: "instagram-icon",
      src: fullUrl(req, "/images/instagram-icon.png")
    }
  ];
  res.json(icons);
});

module.exports = router;
