const {Dashboard} = require("../controller/pageController");
const { Register, Login } = require("../controller/userController");
const userAuth = require("../middleware/userAuth");

const routes=require("express").Router();
routes.post("/Login",Login)
routes.post("/Register",Register)
// routes.get("/Register",userAuth,Home)
routes.get("/Dashbord",userAuth,Dashboard)
module.exports=routes;