
// Express
let express = require("express");
let app = express();

// Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/full_mean');
let UserSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    editable: { type: Boolean, require: true }
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");


//PATH COMES AFTER THE DATABASE
const path = require("path");


// Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//morgan debugger
let morgan = require("morgan");
app.use(morgan('dev'));

// Static Folder
app.use(express.static(__dirname + '/public/dist'));


//Routes
app.get("/users", (req, res, next) => {
    User.find({}, (err, users) => {
        return res.json(users);
       })
    })

app.post("/users", (req, res, next) => {
   console.log("Server > POST  '/users' > user ", req.body);
   User.create(req.body, (err, user)=> {
       if (err) return res.json(err)
       else return res.json(user)
   })

})

app.get("/users", (req, res, next) => {
    
})
    
app.get("/users", (req, res, next) => {
        
 })

app.all("*", (req, res, next) => {
    res.sendfile(path.resolve('./public/dist/index.html'));
})



// Server Listening @ 1337
app.listen(1337, ()=> console.log("Server running at 1337"));