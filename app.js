const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');
app.set('views', 'views');

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//setup a path for static serving images, css, etc.
app.use(express.static(path.join(__dirname,'public')));

//base url is specified here as /admin so they will be considered only starting with that path 
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Error 404'});
})

app.listen(3000);
