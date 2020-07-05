// 服务端入口文件

// console.log("hahah")

const express = require('express');

const app = express();

// 静态资源托管
app.use('/upload', express.static(__dirname + "/uploads"))
app.use(require('cors')());//跨域模块
app.use(express.json());

// import adminApp from './routes/admin/index';
require("./db/db.js")(app);
require("./routes/admin/index.js")(app)

app.listen(3000, () => {
    console.log('listen......')
});

// console.log(module)