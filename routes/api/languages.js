const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const fullUrl = require("../fullUrl");

router.use("*", function(req, res, next) {
  res.app.locals = languages = [
    {
      id: uuid(),
      country: "United Kingdom",
      language: "English",
      ISOCode: "en-GB",
      flag: fullUrl(req, "/images/United_Kingdom.jpg")
    },
    {
      id: uuid(),
      country: "France",
      language: "French",
      ISOCode: "fr",
      flag: fullUrl(req, "/images/France.jpg")
    },
    {
      id: uuid(),
      country: "Germany",
      language: "German",
      ISOCode: "de",
      flag: fullUrl(req, "/images/Germany.jpg")
    },
    {
      id: uuid(),
      country: "South Korea",
      language: "Korean",
      ISOCode: "ko",
      flag: fullUrl(req, "/images/South_Korea.jpg")
    },
    {
      id: uuid(),
      country: "Philippines",
      language: "Tagalog",
      ISOCode: "tgl",
      flag: fullUrl(req, "/images/Philippines.jpg")
    },
    {
      id: uuid(),
      country: "Spain",
      language: "Spanish",
      ISOCode: "es",
      flag: fullUrl(req, "/images/Spain.jpg")
    },
    {
      id: uuid(),
      country: "China",
      language: "Chinese",
      ISOCode: "zh",
      flag: fullUrl(req, "/images/China.jpg")
    },
    {
      id: uuid(),
      country: "Italy",
      language: "Chinese",
      ISOCode: "it",
      flag: fullUrl(req, "/images/Italy.jpg")
    },
    {
      id: uuid(),
      country: "Latvia",
      language: "Latvian",
      ISOCode: "lv",
      flag: fullUrl(req, "/images/Latvia.jpg")
    }
  ];

  next();
});

router.get("/languages", (req, res) => {
  res.json(languages);
});

module.exports = router;
