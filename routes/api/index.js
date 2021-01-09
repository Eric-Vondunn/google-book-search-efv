const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./book");
const googleRoutes = require("./google");

// book routes

router.use("/book", bookRoutes);

//google routes
router.use("/google", googleRoutes);

//html is the default catch all else

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
