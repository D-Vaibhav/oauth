const passport= require('passport');
const GoogleStratergy= require('passport-google-oauth20');
const keys= require('./keys');
const User= require('../models/user-model');

passport.use( new GoogleStratergy({
        callbackURL: keys.google.callbackURL,
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, 
    (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        console.log('-------------------call-back function----------------');
        User.findOne({googleId: profile.id}).then( (user) => {
            if(user){
                console.log('user already present in db:', user);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                })
                .save()
                .then( (newUser) => {
                    console.log('new user registered in db', newUser);
                });
            }
        }   );
    }
));