const passport= require('passport');
const GoogleStratergy= require('passport-google-oauth20');
const keys= require('./keys');

passport.use( new GoogleStratergy({
        callbackURL: keys.google.callbackURL,
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
    }
))