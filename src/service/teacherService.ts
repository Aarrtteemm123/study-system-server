import {NextFunction, Request, Response, Router} from 'express';
import {Storage} from "../localStorage";

export const teacherRouter: Router = Router();
let storage = new Storage();

teacherRouter.get('/teacher', async function (req: Request, res: Response, next: NextFunction) {
    let teacher = storage.getAll('teachers_waiting');
    res.send(teacher[0]);
    storage.delete(teacher[0], 'teachers_waiting');
});

teacherRouter.post('/teacher', async function (req: Request, res: Response, next: NextFunction) {
    let descriptionWords = req.body.info.split(' ');
    let allStudents = storage.getAll('students');
    if (descriptionWords.length === 1) {
        let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]);
        res.send(stud);
    }
    if (descriptionWords.length === 2) {
        let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]
            && el.user.lastName === descriptionWords[1]);
        res.send(stud);
    }
    if (descriptionWords.length === 3) {
        let stud = allStudents.find(el => el.user.firstName === descriptionWords[0]
            && el.user.lastName === descriptionWords[1]
            && el.group === Number(descriptionWords[2]));
        res.send(stud);
    }

});

teacherRouter.post('/teacher/updateMarks', async function (req: Request, res: Response, next: NextFunction) {
    let student = req.body.data;
    storage.update(student, student.user.typeUser + 's');
    res.send(true);
});
