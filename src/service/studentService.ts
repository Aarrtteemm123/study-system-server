import {NextFunction, Request, Response, Router} from 'express';
import {Storage} from "../localStorage";

export const studentRouter: Router = Router();
let storage = new Storage();

studentRouter.get('/student', async function (req: Request, res: Response, next: NextFunction) {
    let students = storage.getAll('students_waiting');
    res.send(students[0]);
    storage.delete(students[0],'students_waiting');
});
