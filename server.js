const express = require("express");
const path = require("path");
const contact = require("./routes/contact");

const app = express();
app.use(express.json());

// Routing
app.use("/contact", contact);

// server static asset if we'er in production.
if (process.env.NODE_ENV === "production") {
  // set static folder.
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at ${port}`));
