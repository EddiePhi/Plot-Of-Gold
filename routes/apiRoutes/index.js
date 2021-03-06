//ROUTER FOR API ROUTES//
const router = require("express").Router();

//INDIVIDUAL ROUTERS

// //mount singup router
// router.use("/signup", require("./signupLoginRoutes"));

// //mount login router
// router.use("/login", require("./signupLoginRoutes"));

// //mount user router
router.use("/user", require("./userRoutes"));

//mount forecast router
// router.use("/forecast", require("./forecastRoutes"));

//mount plants router
// router.use("/plants", require("./plantRoutes"));

//mount plots router
router.use("/plot", require("./plotRoutes.js"));

//mount zipcode router
// router.use("/zipcode", require("./zipRoutes"));

//mount forecast router
// router.use("/forecast", require("./forecastRoutes"));

//mount currentWeather router

//mount locations router
router.use("/location", require("./locationRoutes.js"));

//mount forumThread Router
router.use("/forumThread", require("./forumThreadRoutes.js"));

//mount forumComment Router
router.use("/forumComment", require("./forumCommentRoutes.js"));

module.exports = router;
