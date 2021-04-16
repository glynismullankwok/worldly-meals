const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log("*** serializeUser called, user: ");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
    console.log("DeserializeUser called");
    User.findOne({ _id: id }, "username", (err, user) => {
      console.log("*** Deserialize user, user:");
      console.log(user);
      console.log("--------------");
      done(null, user);
    });
  });
  
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work

// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });
// passport.deserializeUser((obj, cb) => {
//   cb(null, obj);
// });
  //  Use Strategies
  passport.use(LocalStrategy);
  module.exports = passport;
