const express=require("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv");
const routes = require("./routes/routes");
dotenv.config()
app.use(cors({
    origin:"*"
}))

app.use(express.json());
app.use("/",routes)
app.get("/",(req,res)=>{
    res.send("nice");
})
app.listen(process.env.port,()=>{
    console.log(`server is Live on ${process.env.port}`)
})