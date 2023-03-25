const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config()
const port = process.env.PORT || 3001
const API = process.env.DATABASE_URL || "mongodb+srv://Chandini_S:Crystal0212@cluster0.l2pby5u.mongodb.net/NOTE?retryWrites=true&w=majority"

mongoose.set('strictQuery',false);
const app = require("./app");

async function main(){
    await mongoose.connect(API);
    console.log("connected to database");
    app.listen(port,()=> console.log(`Server is live at PORT => ${port}`));
};
main()