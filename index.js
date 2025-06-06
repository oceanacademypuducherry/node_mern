
const express = require("express");
require("dotenv").config()
const userRoutes = require("./routes/user.routes")


//  initialize app
const app = express()
app.use(express.json())
//  user routes
app.use(userRoutes.routes)



// server listener
const portNo =process.env.PORT_NO || 3000

app.listen(portNo,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`http://localhost:${portNo}`);
})