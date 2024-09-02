const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");
//const { fileURLToPath } = require('url');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

require("dotenv").config();
const PORT = 5000;
require("./db");

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));
app.use("/api/playlist", require("./routes/playlist"));

//use the client app

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Render client
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
