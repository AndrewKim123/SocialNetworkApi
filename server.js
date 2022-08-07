const express = require("express");
const app = express();
const connectDB = require("./config/db")
const apiRouter = require("./routes")

connectDB()

app.use(express.json())

app.use("/api",apiRouter)

app.listen(3001,()=>{
console.log("Server is up and running");
})