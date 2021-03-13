const Express = require("express");
const { addMiddleWares } = require("./middlewares");
const app = Express();

addMiddleWares(app);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log("sever listening :", port));
