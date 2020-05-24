import {NextFunction, Request, Response, Router} from 'express';
import {Storage} from "../localStorage";

export const titleRouter: Router = Router();
let storage = new Storage();

titleRouter.post('/title', async function (req: Request, res: Response, next: NextFunction) {
    let login = req.body.login;
    let password = req.body.password;
    let typeUser = req.body.typeUser;

    let allData = storage.getAll(typeUser + 's');
    let loginObj = allData.find(el => el.user.login === login &&
        el.user.password === password);
    if (typeof loginObj === 'undefined') res.send(false);
    else
    {
        storage.add(loginObj,typeUser+'s_waiting');
        res.send(true);
    }
});

titleRouter.post('/register', async function (req: Request, res: Response, next: NextFunction) {
    let obj = req.body;
    let allData = storage.getAll(obj.user.typeUser + 's');
    let isExistObj = allData.find(el => el.user.login === obj.user.login &&
        el.user.password === obj.user.password);
    if (typeof isExistObj === 'undefined')
    {
        storage.add(obj,obj.user.typeUser + 's_requests');
        res.send(true);
    }
    else res.send(false);
});
