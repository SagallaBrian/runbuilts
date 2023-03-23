const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static("./frontend"));

app.get("/*", (req, res) => res.sendFile("index.html", { root: "frontend/" }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
