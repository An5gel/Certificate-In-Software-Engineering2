const express = require('express');


require('dotenv').config();
const path = require('path');
const connectDB = require("./config/dbConfig");
const port = process.env.PORT || 6500;

const app = express();






const formRoutes = require("./controllers/formRoutes")




// calling and setting express session
const expressSession = require("express-session")({
  secret: "secret", 
  resave: false,
  saveUninitialised: false
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());



connectDB();



// setting engine
app.engine("pug", require("pug").__express);
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views/pug"));

app.use(expressSession);

// setting for static files
app.use(express.static(path.join(__dirname, "public")));







app.use('/api', formRoutes)



// app.listen(6500,()=>console.log(`listening on ${port}`))
app.listen(port, ()=> console.log(`listening on http://localhost:${port}`));