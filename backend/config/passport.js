const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const pool = require("./db");

const { ...keys } = require("./keys");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      if (Date.now() > jwtPayload.expires) {
        return done("jwt expired");
      }
      pool.query(
        "SELECT id FROM users WHERE id = ?",
        jwtPayload.id,
        (err, results) => {
          if (results[0]) {
            return done(null, jwtPayload);
          } else {
            throw err;
          }
        }
      );
    })
  );
};
