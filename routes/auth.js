const router = require("express").Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const axios = require("axios");

//matches /auth/google+

// GET Google Authentication API.

router.get(
  "/",
  passport.authenticate("google", {
    scope: "https://www.googleapis.com/auth/userinfo.profile",
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: true,
  }),
  async function (req, res) {
    let redirectID = "";
    console.log("auth req\n", req.user.session);
    if (!req.user.session) {
      res.cookie("session", "");
      console.log("session cookie not set");
    } else {
      res.cookie("token", req.user.session.token);
      console.log("session cookie set");
      const userString = JSON.stringify(req.user.session.profile);
      console.log(userString);
      console.log("finding user");
      axios({
        method: "post",
        url: process.env.BASE_URL + "auth/google/find",
        data: req.user.session.profile,
      }).then((response) => {
        console.log("hello user");
        console.log(response);
        if (response.data === null || response.data === undefined) {
          console.log("creating user");
          axios({
            method: "post",
            url: process.env.BASE_URL + "auth/google/create",
            data: req.user.session.profile,
          }).then((response) => {
            console.log(response.data);
          });
        } else {
          console.log(response.data);
          redirectID = response.data._id;
        }
        if (redirectID === "") {
          res.redirect(process.env.BASE_URL);
        } else {
          res.redirect(process.env.BASE_URL + "user/mydashboard/?q=" + response.data._id);
        }
      });
    }
  }
);

router.post("/find", userController.findExt);
router.post("/create", userController.createExt);

module.exports = router;
