import {Admin} from "./model/admin";
import {User} from "./model/user";
import {Teacher} from "./model/teacher";
import {Student} from "./model/student";
import {Subject} from "./model/subject";

export class Storage {

    constructor() {
    }

    public add(obj, fileName) {
        let fs = require('fs');
        let data = fs.readFileSync('src/database/' + fileName, 'utf-8');
        if (data === '') {
            fs.writeFileSync('src/database/' + fileName, JSON.stringify([obj]), 'utf-8');
        } else {
            let lstObj = JSON.parse(data);
            lstObj.push(obj);
            fs.writeFileSync('src/database/' + fileName, JSON.stringify(lstObj), 'utf-8');
        }
    }

    public getAll(fileName) {
        let fs = require('fs');
        let data = fs.readFileSync('src/database/' + fileName, 'utf-8');
        if (data === '' || data === []) {
            return [];
        }
        return JSON.parse(data);
    }

    public delete(obj, fileName) {
        let fs = require('fs');
        let data = this.getAll(fileName);
        let indexObj = data.findIndex(el => el.id === obj.id);
        if (indexObj != -1) {
            data.splice(indexObj, 1);

            fs.writeFileSync('src/database/' + fileName, JSON.stringify(data), 'utf-8');
            return true;

        }
        return false;
    }

    public deleteAll(fileName) {
        let fs = require('fs');
        fs.writeFileSync('src/database/' + fileName, '', 'utf-8');
    }

    public get(obj, fileName) {
        let dataLst = this.getAll(fileName);
        return dataLst.find(element => element.id === obj.id)
    }

    public update(obj, fileName) {
        let fs = require('fs');
        let dataLst = this.getAll(fileName);
        let indexObj = dataLst.findIndex(element => element.id === obj.id);
        if (indexObj != -1) {
            dataLst[indexObj] = obj;
            fs.writeFileSync('src/database/' + fileName, JSON.stringify(dataLst), 'utf-8');
            return true;
        }
        return false;
    }

    public reset() {
        let fs = require('fs');
        let requestStudents = [
            new Student(new User('Rafael', 'Murphy', 'otusyxufe-8073@gmail.com', 'stud1', 'pass stud1', 'student'), 343, 'Software engineering', [new Subject('Java', 0), new Subject('Python', 0), new Subject('JavaScript', 0), new Subject('C#', 0), new Subject('Web design', 0)]),
            new Student(new User('Victor', 'Duran', 'mannygikamu-2220@gmail.com', 'stud2', 'pass stud2', 'student'), 243, 'Computer engineering', [new Subject('Assembler', 0), new Subject('C/C++', 0), new Subject('Math', 0), new Subject('C#', 0), new Subject('English', 0)]),
            new Student(new User('Vlad', 'Ortiz', 'illittocunn-4008@gmail.com', 'stud3', 'pass stud3', 'student'), 343, 'Data scientist', [new Subject('Python', 0), new Subject('Ml', 0), new Subject('English', 0), new Subject('Math', 0)])
        ];
        fs.writeFileSync('src/database/students_requests', JSON.stringify(requestStudents), 'utf-8');
        let allStudents = [
            new Student(new User('Saif', 'Logan', 'cigisicy-7230@gmail.com', 'stud4', 'pass stud4', 'student'), 143, 'Software engineering', [new Subject('Java', 66), new Subject('Python', 45), new Subject('JavaScript', 100), new Subject('C#', 46), new Subject('Web design', 100)]),
            new Student(new User('Jason', 'Singh', 'ekafferapa-0603@gmail.com', 'stud5', 'pass stud5', 'student'), 243, 'Computer science', [new Subject('Java', 78), new Subject('Python', 54), new Subject('JavaScript', 80), new Subject('C#', 65), new Subject('Web design', 1), new Subject('Assembler', 77), new Subject('C/C++', 60), new Subject('Computer graphics', 12), new Subject('Math', 61), new Subject('Project analysis', 12), new Subject('Network technology', 100), new Subject('English', 70), new Subject('ML', 50)]),
            new Student(new User('Max', 'Owens', 'zawigettunn-5557@gmail.com', 'stud6', 'pass stud6', 'student'), 443, 'Cybersecurity', [new Subject('JavaScript', 12), new Subject('Network technology', 67), new Subject('Web design', 82), new Subject('Math', 77), new Subject('English', 88)]),
            new Student(new User('Artem', 'Gardner', 'koddasyppoha-1514@gmail.com', 'stud7', 'pass stud7', 'student'), 343, 'Data scientist', [new Subject('Python', 100), new Subject('Ml', 77), new Subject('English', 99), new Subject('Math', 41)]),
            new Student(new User('Charles', 'Pacheco', 'ykiddywi-5302@gmail.com', 'stud8', 'pass stud8', 'student'), 143, 'Software engineering', [new Subject('Java', 89), new Subject('Python', 20), new Subject('JavaScript', 41), new Subject('C#', 30), new Subject('Web design', 45)]),
            new Student(new User('Jean', 'Sutton', 'ellicuddamm-0599@gmail.com', 'stud9', 'pass stud9', 'student'), 543, 'Computer engineering', [new Subject('Assembler', 12), new Subject('C/C++', 5), new Subject('Math', 19), new Subject('C#', 88), new Subject('English', 47)])
        ];
        fs.writeFileSync('src/database/students', JSON.stringify(allStudents), 'utf-8');
        let requestTeachers = [
            new Teacher(new User('Hector', 'Vaughan', 'xybohedi-6635@gmail.com', 'tea1', 'pass tea1', 'teacher'), 2, [143, 243, 432], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Math', 'Network technology', 'English']),
            new Teacher(new User('Keaton', 'Turner', 'oduxerip-1383@gmail.com', 'tea2', 'pass tea2', 'teacher'), 6, [243, 343, 443], ['Assembler', 'Java', 'JavaScript', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML']),
            new Teacher(new User('Josiah', 'Price', 'iffoverra-0573@gmail.com', 'tea3', 'pass tea3', 'teacher'), 10, [143, 432], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML'])
        ];
        fs.writeFileSync('src/database/teachers_requests', JSON.stringify(requestTeachers), 'utf-8');
        let allTeachers = [
            new Teacher(new User('Fred', 'Henderson', 'yllovixa-2123@gmail.com', 'tea4', 'pass tea4', 'teacher'), 4, [143, 243, 443, 543], ['JavaScript', 'C#', 'Web design', 'Computer graphics', 'Project analysis', 'Network technology', 'English', 'ML']),
            new Teacher(new User('Sara', 'Simmons', 'uffedduhi-8311@gmail.com', 'tea5', 'pass tea5', 'teacher'), 20, [143, 223, 443, 543], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Network technology', 'English']),
            new Teacher(new User('Sandy', 'Goodwin', 'ezarrake-9223@gmail.com', 'tea6', 'pass tea6', 'teacher'), 6, [143], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis']),
            new Teacher(new User('Saya', 'Henry', 'udelluzo-8074@gmail.com', 'tea7', 'pass tea7', 'teacher'), 8, [143, 243, 343], ['C/C++', 'Java', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'English', 'ML']),
            new Teacher(new User('Sonya', 'Dawson', 'qappopebah-3331@gmail.com', 'tea8', 'pass tea8', 'teacher'), 12, [143, 243, 543], ['Assembler', 'C/C++', 'Python', 'JavaScript', 'Computer graphics', 'Math', 'Project analysis', 'English', 'ML']),
            new Teacher(new User('Spike', 'Watkins', 'enammerret-0005@gmail.com', 'tea9', 'pass tea9', 'teacher'), 1, [143, 343, 543], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML'])
        ];
        fs.writeFileSync('src/database/teachers', JSON.stringify(allTeachers), 'utf-8');
        let requestAdmins = [
            new Admin(new User('Senri', 'Flores', 'gowessefenna-4125@gmail.com', 'ad1', 'pass ad1', 'admin')),
            new Admin(new User('Slezz', 'Edwards', 'kigumeppi-4486@gmail.com', 'ad2', 'pass ad2', 'admin')),
            new Admin(new User('Steve', 'Morarash', 'wyssallatapp-4765@gmail.com', 'ad3', 'pass ad3', 'admin'))
        ];
        fs.writeFileSync('src/database/admins_requests', JSON.stringify(requestAdmins), 'utf-8');
        let allAdmins = [
            new Admin(new User('Main', 'director', 'guvulleburra-0081@gmail.com', 'ad4', 'pass ad4', 'admin')),
            new Admin(new User('Control', 'manager', 'dafof18625@gmail.com', 'ad5', 'pass ad5', 'admin'))
        ];
        fs.writeFileSync('src/database/admins', JSON.stringify(allAdmins), 'utf-8');

        fs.writeFileSync('src/database/admins_waiting', '', 'utf-8');
        fs.writeFileSync('src/database/students_waiting', '', 'utf-8');
        fs.writeFileSync('src/database/teachers_waiting', '', 'utf-8');
    }

}
