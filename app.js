const express= require('express');
const authRoutes= require('./routes/auth-routes');
const mongoose= require('mongoose');
const keys= require('./config/keys');
require('./config/passport-setup');

const app= express();

// environment variables
const PORT= process.env.PORT || 4000;

// connect to db
mongoose.connect(keys.mongoDB.dbURI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('Successfully connected to DB');
});

// setting view engine
app.set('view engine', 'ejs');

// middleware
app.use('/auth/', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`app start running on PORT:${PORT}`);
});
