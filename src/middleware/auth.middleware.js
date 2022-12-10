//Passport has different strategies to handle logins (bearer, jwt, fackebook,google)

const JwtStrategy = require('passport-jwt').Strategy
const JwtStrategy = require('passport-jwt').Strategy


//Extract the token from the headers of my requests


const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const jwtSecret = require('../../config').api.jwtSecret
const { findUserById } = require('../users/users.controllers')     // ../users/users.controllers'


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'), // If the token starts JWT, grab the token
    secretOrKey: jwtSecret
}
passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        //? done(error, tokenDecoded)


        try {
            const user = await findUserById(tokenDecoded.id)
            if (!user) {
                return done(null, false)              // There is no error but the user does not exist either
            }
            return done(null, tokenDecoded)          // There is no error but if a user
        } catch (error) {
            return done(error, false)               // If there is an error, but not a user
        }
    })
)


module.exports = passport