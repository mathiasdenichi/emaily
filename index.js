const express = require('../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express')
const passport = require('../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/passport')
const GoogleStrategy = require('passport-google-oauth20/lib').Strategy
const keys = require('./config/keys')
const app = express()

passport.use(
  new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
}, 
accessToken => {
  console.log(accessToken)
})
)

app.get(
  '/auth/google', 
  passport.authenticate('google', {
  scope: ['profile', 'email'],
})
)

const PORT = process.env.PORT || 5000
app.listen(PORT) 
