import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {Storage} from "./localStorage";
import {studentRouter} from "./service/studentService";
import {titleRouter} from "./service/authService";
import {teacherRouter} from "./service/teacherService";
import {adminRouter} from "./service/adminService";

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(studentRouter)
    .use(teacherRouter)
    .use(adminRouter)
    .use(titleRouter);


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://univer-sv.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    next();
});

const port = process.env.PORT || 8000;

app.listen(port, function () {
    new Storage().reset();
    console.log("Server is running on port " + port);
});
