const express  = require('express')
const app = express()

require('dotenv').config()
const dbConnect = require('./Model/DbConnect')
dbConnect(process.env.MONGODB_URL)

// const cors = require('cors')
// app.use(cors())

const cors = require("cors");
const FRONTEND = process.env.FRONTEND_URL || "http://localhost:9000";
// Add the frontend URL once deployed 
var corsOptions = { origin: FRONTEND, credentials: true };
app.use(cors(corsOptions));


app.use(express.urlencoded({extended:true}))
app.use(express.json())

const path = require('path')
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const Router = require('./Router/UserRouter')
app.use('/',Router)

const cartRouter = require("./Router/CartRouter")
app.use('/cart',cartRouter)

const AdminRouter = require('./Router/AdminRouter')
app.use('/admin',AdminRouter)


// app.listen(process.env.PORT,()=>{
//           console.log('Server running successfully @http://localhost:9000')
// })

module.exports = app;
