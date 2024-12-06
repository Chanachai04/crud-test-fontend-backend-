const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const {readdirSync} = require("fs");
const connectDB = require("./Config/db");

const app = express();

connectDB();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

readdirSync("./Routes").map((file) => app.use("/api", require(`./Routes/${file}`)));

app.listen(3030, () => console.log("Server is running on port 3030"));
