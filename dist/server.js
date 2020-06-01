"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const localStorage_1 = require("./localStorage");
const studentService_1 = require("./service/studentService");
const authService_1 = require("./service/authService");
const teacherService_1 = require("./service/teacherService");
const adminService_1 = require("./service/adminService");
const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(studentService_1.studentRouter)
    .use(teacherService_1.teacherRouter)
    .use(adminService_1.adminRouter)
    .use(authService_1.titleRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});
const port = process.env.PORT || 8000;
app.listen(port, function () {
    new localStorage_1.Storage().reset();
    console.log("Server is running on port " + port);
});
