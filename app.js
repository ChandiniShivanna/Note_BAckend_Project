const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const app= express();

const RegistrationRoute= require('./routes/registerRouter');
const LoginRoute=require('./routes/loginRoutes')
const notesroutes=require("./routes/notes")
// const 
const Authentication=require('./middleware/autherization')

app.use(cors());

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use('/',RegistrationRoute);
app.use('/',LoginRoute);
app.use('/',Authentication,notesroutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        "Message":"Server is ok"
    })
})
module.exports=app;