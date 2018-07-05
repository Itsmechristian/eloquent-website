const express = require("express");
const port = process.env.port || 5500;
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => console.log(`Connected to port ${port}`));
