"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_1 = require("./model/admin");
const user_1 = require("./model/user");
const teacher_1 = require("./model/teacher");
const student_1 = require("./model/student");
const subject_1 = require("./model/subject");
class Storage {
    constructor() { }
    add(obj, fileName) {
        let fs = require('fs');
        let data = fs.readFileSync('src/database/' + fileName, 'utf-8');
        if (data === '') {
            fs.writeFileSync('src/database/' + fileName, JSON.stringify([obj]), 'utf-8');
        }
        else {
            let lstObj = JSON.parse(data);
            lstObj.push(obj);
            fs.writeFileSync('src/database/' + fileName, JSON.stringify(lstObj), 'utf-8');
        }
    }
    getAll(fileName) {
        let fs = require('fs');
        let data = fs.readFileSync('src/database/' + fileName, 'utf-8');
        if (data === '' || data === []) {
            return [];
        }
        return JSON.parse(data);
    }
    delete(obj, fileName) {
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
    deleteAll(fileName) {
        let fs = require('fs');
        fs.writeFileSync('src/database/' + fileName, '', 'utf-8');
    }
    get(obj, fileName) {
        let dataLst = this.getAll(fileName);
        return dataLst.find(element => element.id === obj.id);
    }
    update(obj, fileName) {
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
    reset() {
        let fs = require('fs');
        let requestStudents = [
            new student_1.Student(new user_1.User('Rafael', 'Murphy', 'otusyxufe-8073@gmail.com', 'stud1', 'pass stud1', 'student'), 343, 'Software engineering', [new subject_1.Subject('Java', 0), new subject_1.Subject('Python', 0), new subject_1.Subject('JavaScript', 0), new subject_1.Subject('C#', 0), new subject_1.Subject('Web design', 0)]),
            new student_1.Student(new user_1.User('Victor', 'Duran', 'mannygikamu-2220@gmail.com', 'stud2', 'pass stud2', 'student'), 243, 'Computer engineering', [new subject_1.Subject('Assembler', 0), new subject_1.Subject('C/C++', 0), new subject_1.Subject('Math', 0), new subject_1.Subject('C#', 0), new subject_1.Subject('English', 0)]),
            new student_1.Student(new user_1.User('Vlad', 'Ortiz', 'illittocunn-4008@gmail.com', 'stud3', 'pass stud3', 'student'), 343, 'Data scientist', [new subject_1.Subject('Python', 0), new subject_1.Subject('Ml', 0), new subject_1.Subject('English', 0), new subject_1.Subject('Math', 0)])
        ];
        fs.writeFileSync('src/database/students_requests', JSON.stringify(requestStudents), 'utf-8');
        let allStudents = [
            new student_1.Student(new user_1.User('Saif', 'Logan', 'cigisicy-7230@gmail.com', 'stud4', 'pass stud4', 'student'), 143, 'Software engineering', [new subject_1.Subject('Java', 66), new subject_1.Subject('Python', 45), new subject_1.Subject('JavaScript', 100), new subject_1.Subject('C#', 46), new subject_1.Subject('Web design', 100)]),
            new student_1.Student(new user_1.User('Jason', 'Singh', 'ekafferapa-0603@gmail.com', 'stud5', 'pass stud5', 'student'), 243, 'Computer science', [new subject_1.Subject('Java', 78), new subject_1.Subject('Python', 54), new subject_1.Subject('JavaScript', 80), new subject_1.Subject('C#', 65), new subject_1.Subject('Web design', 1), new subject_1.Subject('Assembler', 77), new subject_1.Subject('C/C++', 60), new subject_1.Subject('Computer graphics', 12), new subject_1.Subject('Math', 61), new subject_1.Subject('Project analysis', 12), new subject_1.Subject('Network technology', 100), new subject_1.Subject('English', 70), new subject_1.Subject('ML', 50)]),
            new student_1.Student(new user_1.User('Max', 'Owens', 'zawigettunn-5557@gmail.com', 'stud6', 'pass stud6', 'student'), 443, 'Cybersecurity', [new subject_1.Subject('JavaScript', 12), new subject_1.Subject('Network technology', 67), new subject_1.Subject('Web design', 82), new subject_1.Subject('Math', 77), new subject_1.Subject('English', 88)]),
            new student_1.Student(new user_1.User('Artem', 'Gardner', 'koddasyppoha-1514@gmail.com', 'stud7', 'pass stud7', 'student'), 343, 'Data scientist', [new subject_1.Subject('Python', 100), new subject_1.Subject('Ml', 77), new subject_1.Subject('English', 99), new subject_1.Subject('Math', 41)]),
            new student_1.Student(new user_1.User('Charles', 'Pacheco', 'ykiddywi-5302@gmail.com', 'stud8', 'pass stud8', 'student'), 143, 'Software engineering', [new subject_1.Subject('Java', 89), new subject_1.Subject('Python', 20), new subject_1.Subject('JavaScript', 41), new subject_1.Subject('C#', 30), new subject_1.Subject('Web design', 45)]),
            new student_1.Student(new user_1.User('Jean', 'Sutton', 'ellicuddamm-0599@gmail.com', 'stud9', 'pass stud9', 'student'), 543, 'Computer engineering', [new subject_1.Subject('Assembler', 12), new subject_1.Subject('C/C++', 5), new subject_1.Subject('Math', 19), new subject_1.Subject('C#', 88), new subject_1.Subject('English', 47)])
        ];
        fs.writeFileSync('src/database/students', JSON.stringify(allStudents), 'utf-8');
        let requestTeachers = [
            new teacher_1.Teacher(new user_1.User('Hector', 'Vaughan', 'xybohedi-6635@gmail.com', 'tea1', 'pass tea1', 'teacher'), 2, [143, 243, 432], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Math', 'Network technology', 'English']),
            new teacher_1.Teacher(new user_1.User('Keaton', 'Turner', 'oduxerip-1383@gmail.com', 'tea2', 'pass tea2', 'teacher'), 6, [243, 343, 443], ['Assembler', 'Java', 'JavaScript', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML']),
            new teacher_1.Teacher(new user_1.User('Josiah', 'Price', 'iffoverra-0573@gmail.com', 'tea3', 'pass tea3', 'teacher'), 10, [143, 432], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML'])
        ];
        fs.writeFileSync('src/database/teachers_requests', JSON.stringify(requestTeachers), 'utf-8');
        let allTeachers = [
            new teacher_1.Teacher(new user_1.User('Fred', 'Henderson', 'yllovixa-2123@gmail.com', 'tea4', 'pass tea4', 'teacher'), 4, [143, 243, 443, 543], ['JavaScript', 'C#', 'Web design', 'Computer graphics', 'Project analysis', 'Network technology', 'English', 'ML']),
            new teacher_1.Teacher(new user_1.User('Sara', 'Simmons', 'uffedduhi-8311@gmail.com', 'tea5', 'pass tea5', 'teacher'), 20, [143, 223, 443, 543], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Network technology', 'English']),
            new teacher_1.Teacher(new user_1.User('Sandy', 'Goodwin', 'ezarrake-9223@gmail.com', 'tea6', 'pass tea6', 'teacher'), 6, [143], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis']),
            new teacher_1.Teacher(new user_1.User('Saya', 'Henry', 'udelluzo-8074@gmail.com', 'tea7', 'pass tea7', 'teacher'), 8, [143, 243, 343], ['C/C++', 'Java', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'English', 'ML']),
            new teacher_1.Teacher(new user_1.User('Sonya', 'Dawson', 'qappopebah-3331@gmail.com', 'tea8', 'pass tea8', 'teacher'), 12, [143, 243, 543], ['Assembler', 'C/C++', 'Python', 'JavaScript', 'Computer graphics', 'Math', 'Project analysis', 'English', 'ML']),
            new teacher_1.Teacher(new user_1.User('Spike', 'Watkins', 'enammerret-0005@gmail.com', 'tea9', 'pass tea9', 'teacher'), 1, [143, 343, 543], ['Assembler', 'C/C++', 'Java', 'Python', 'JavaScript', 'C#', 'Web design', 'Computer graphics', 'Math', 'Project analysis', 'Network technology', 'English', 'ML'])
        ];
        fs.writeFileSync('src/database/teachers', JSON.stringify(allTeachers), 'utf-8');
        let requestAdmins = [
            new admin_1.Admin(new user_1.User('Senri', 'Flores', 'gowessefenna-4125@gmail.com', 'ad1', 'pass ad1', 'admin')),
            new admin_1.Admin(new user_1.User('Slezz', 'Edwards', 'kigumeppi-4486@gmail.com', 'ad2', 'pass ad2', 'admin')),
            new admin_1.Admin(new user_1.User('Steve', 'Morarash', 'wyssallatapp-4765@gmail.com', 'ad3', 'pass ad3', 'admin'))
        ];
        fs.writeFileSync('src/database/admins_requests', JSON.stringify(requestAdmins), 'utf-8');
        let allAdmins = [
            new admin_1.Admin(new user_1.User('Main', 'director', 'guvulleburra-0081@gmail.com', 'ad4', 'pass ad4', 'admin')),
            new admin_1.Admin(new user_1.User('Control', 'manager', 'dafof18625@gmail.com', 'ad5', 'pass ad5', 'admin'))
        ];
        fs.writeFileSync('src/database/admins', JSON.stringify(allAdmins), 'utf-8');
        fs.writeFileSync('src/database/admins_waiting', '', 'utf-8');
        fs.writeFileSync('src/database/students_waiting', '', 'utf-8');
        fs.writeFileSync('src/database/teachers_waiting', '', 'utf-8');
    }
}
exports.Storage = Storage;
