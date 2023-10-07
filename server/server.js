const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const path = require("path");
//Destructered engine out of express-handlebars module
const {engine} = require("express-handlebars");

const app = express();


//views
app.set('views', path.join(__dirname, '..', 'views'));

app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../views', 'layouts'),
    partialsDir: path.join(__dirname,'../views', 'partials')}
));

app.set('view engine', 'handlebars');

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('contact')
});

app.listen(3000, ()=> console.log(`Server is running on port 3000`))