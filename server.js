const express = require('express');
const dotenv =require('dotenv');
const routes = require('./routes/index');
const connectDB = require('./config/db');
// const register = require('./routes/index')
// dotenv.config({ path:'./config/config.env'})
dotenv.config({ path:'.env'});




const app = express();

//Paeser request of content-type-application/json
app.use(express.json());

//STATIC
app.use(express.static('public'));

//Perse request of content-type -application
app.use(express.urlencoded({ extended: true}));

app.use('/api/students',routes)

app.set('view engine', 'ejs');

// load CONFIG

connectDB();
// app.use('/api/registration' , register);

app.get('/', (req, res) => {
    // res.sendFile(__dirname +  '/views/index.ejs')
    res.render('index')
})
// user
app.get('/home', (req, res) => {
    res.render('home');
 })
 
 app.get('/registration', (req, res) => {
    res.render('registration');
 })
 
 app.get('/login', (req, res) => {
    res.render('login');
 })

 
 app.get('/secretPage', (req, res) => {
   res.render('secretPage');
 })

 app.get('/conti', (req, res) => {
    res.render('conti');
 })
 

app.post('/api/students', (req,res) => {
    return res.redirect('')
})

// SERVER
const PORT =process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

