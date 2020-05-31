export class Subject {
    static counter = 0;
    id = 0;
    name = '';
    mark = 0;

    constructor(name, mark) {
        Subject.counter += 1;
        this.id = Subject.counter;
        this.name = name;
        this.mark = mark;
    }
}
