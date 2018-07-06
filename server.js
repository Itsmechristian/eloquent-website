const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "assets")));

const icons = require("./routes/api/icons");
app.use("/api", icons);
const port = process.env.port || 5501;

app.listen(port, () => console.log(`Connected to port ${port}`));
