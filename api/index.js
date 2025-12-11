const express  = require('express')
const app = express()

require('dotenv').config()
const dbConnect = require('./Model/DbConnect')
dbConnect(process.env.MONGODB_URL)

// const cors = require('cors')
// app.use(cors())

const cors = require("cors");
app.use(cors({origin : process.env.FRONTEND_URL,
              methods:"GET,POST,PUT,DELETE",
              credentials:true
}));


app.use(express.urlencoded({extended:true}))
app.use(express.json())

const path = require('path')
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const Router = require('./Router/UserRouter')
app.use('/user',Router)

const cartRouter = require("./Router/CartRouter")
app.use('/cart',cartRouter)

const AdminRouter = require('./Router/AdminRouter')
app.use('/admin',AdminRouter)


// app.listen(process.env.PORT,()=>{
//           console.log('Server running successfully @http://localhost:9000')
// })
app.get("/",(req,res)=>{
    res.send("FruitMart Backend API is running...")
})

module.exports = app;
