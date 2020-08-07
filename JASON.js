class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    hello() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName + ' from class person');

    }
}

let person = new Person('will', 'smith');
person.hello();


class Student extends Person {
    constructor(first, last, major) {
        super(first, last);
        this.major = major;
        this.tutionPaid;

    }
    get getStudentFirstName() {
        return this.firstName;

    }
    get getPayment() {
        if (this.tutionPaid > 100) {
            console.log("The amount you paid is " + this.tutionPaid + '$');
        } else {
            return this.tutionPaid;
        }
    }


    set setPayment(amount) {
        if (amount > 100) {
            this.tutionPaid = amount;

        } else {
            console.log("The amount you paid is " + this.tutionPaid + '$');
        }
    }

    hello() {
        console.log('Hello ' + this.firstName + ' ' + this.lastName + ' and major is: ' + this.major);
    }
}

let student = new Student('will', 'smith', 'actor');
student.setPayment = 175;
student.getPayment;
student.hello();