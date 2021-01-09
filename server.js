const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// this will configure the body parsing specifically for AJAX requests
app.use([express.urlencoded({ extended: true }), express.json()]);
//will serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Link API Routes here

app.use(routes);
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//connection to mongo
mongoose.connect(process.env.MONGODB_URI || "", {
  useCreateIndex: true,
  useNewUrlParser: true,
});

//api server
app.listen(PORT, () => {
  console.log(
    "🚀  Server server now on port",
    PORT,
    "👻 React App on Port 3000"
  );
});
