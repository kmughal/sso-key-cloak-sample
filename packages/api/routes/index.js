const Express = require("express");
const router = Express.Router();


module.exports.addRoutes = () => {
    router.get("/sign-in" , signInController.signIn)

}