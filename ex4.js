class BMI {
    constructor(name, mass, height) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.bmi;
    }
    calculateBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}
let object1 = new BMI('Mark', 80, 1.8)
let object2 = new BMI('John', 75, 1.72)

console.log(object1.name + ' BMI ' + object1.calculateBMI())
console.log(object2.name + ' BMI ' + object2.calculateBMI())

if (object1.calculateBMI() == object2.calculateBMI()) {
    console.log(object2.name + ' has equal bmi as ' + object1.name)
}
else if (object1.calculateBMI() > object2.calculateBMI()) {
    console.log(object1.name + ' has more bmi than ' + object2.name)
}
else {
    console.log(object2.name + ' has more bmi than ' + object1.name)
}




