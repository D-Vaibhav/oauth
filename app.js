const express= require('express');
const authRoutes= require('./routes/auth-routes');
require('./config/passport-setup');
const app= express();

const PORT= process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use('/auth/', authRoutes);

// home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`app start running on PORT:${PORT}`);
});
