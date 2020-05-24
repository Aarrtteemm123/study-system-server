import {NextFunction, Request, Response, Router} from 'express';
import {Storage} from "../localStorage";

export const adminRouter: Router = Router();
let storage = new Storage();

adminRouter.get('/admin', async function (req: Request, res: Response, next: NextFunction) {
    let admins = storage.getAll('admins_waiting');
    storage.delete(admins[0],'admins_waiting');
    let allData = {
        requestStud: storage.getAll('students_requests'),
        allStud: storage.getAll('students'),
        requestTeachers: storage.getAll('teachers_requests'),
        allTeachers: storage.getAll('teachers'),
        requestAdmins: storage.getAll('admins_requests'),
        allAdmins: storage.getAll('admins'),
        admin: admins[0]
    };
    res.send(allData);
});

adminRouter.post('/admin/confirm', async function (req: Request, res: Response, next: NextFunction) {
    let obj = req.body.data;
    console.log(obj.user.typeUser);
    let allData = storage.getAll(obj.user.typeUser + 's');
    let isExistObj = allData.find(el => el.user.login === obj.user.login &&
        el.user.password === obj.user.password);
    if (typeof isExistObj === 'undefined')
    {
        storage.add(obj,obj.user.typeUser + 's');
        storage.delete(obj,obj.user.typeUser+'s_requests');
        res.send(true);
    }
    else res.send(false);
});

adminRouter.post('/admin/delete', async function (req: Request, res: Response, next: NextFunction) {
    let obj = req.body.data;
    console.log(obj);
    storage.delete(obj,obj.user.typeUser+'s');
    storage.delete(obj,obj.user.typeUser+'s_requests');
    res.send(true);
});

adminRouter.post('/admin/deleteAll', async function (req: Request, res: Response, next: NextFunction) {
    let filename = req.body.data;
    storage.deleteAll(filename);
});

adminRouter.post('/admin/update', async function (req: Request, res: Response, next: NextFunction) {
    let obj = req.body.data;
    console.log(obj);
    storage.update(obj,obj.user.typeUser+'s');
    res.send(true);
});
