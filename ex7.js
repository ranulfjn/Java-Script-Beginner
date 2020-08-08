//------------------------------------ first question-------------------------------

// the formula for calculating your maximum heart rate in beats per minute
// is 220 minus your age in years. Your target heart rate is a range that is
// 50-85% of your maximum heart rate.Create a class called Rates.
// The class attributes should include the person's first name,last name, 
// year of birth and the current year. Your class should have a constructor
// that receives this data as parameters. For each attribute provide
// a property with set and get accessors. the class also should include a 
// property that calculates and returns the person's age (in years), a property
// that calculates and returns the person's maximum heart rate and properties
// that calculate and return the person's minimum and maximum target heart rates.
// Write an app that prompts for the person's information, instantiates an object
// of class Rates and displays the information from that object, including
// the person's first name, last name, and year of birth. then calculates and displays 
// the person's age in years, maximum heart rate and target-heart-rate range.

class Rates {
    constructor(firstName, lastName, yearOfBirth, currentYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.currentYear = currentYear;
        this.age;
        this.maxHeartRate;
        this.targetHeartRate;
    }

    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }

    get getYearOfbirth() {
        return this.yearOfBirth
    }

    get getCurrentYear() {
        return this.currentYear;
    }
    set setFirstName(fname) {
        this.firstName = fname;

    }
    set setLastName(lname) {
        this.LastName = lname;

    }

    set setYearOfBirth(yob) {
        this.yearOfBirth = yob;

    }
    set setCurrentYear(currentYear) {
        this.currentYear = currentYear;

    }


    calculateAge() {
        this.age = this.currentYear - this.yearOfBirth
        return this.age;
    }


    calculateMaxHeartRate() {
        this.maxHeartRate = 220 - this.age;
        return this.maxHeartRate;
    }

    calculateTargetHeartRate() {
        this.targetHeartRate = 100 * (220 - this.age) / 220;
        return this.targetHeartRate;
    }

}

let object = new Rates('Mark', 'John', 1996, 2020);
console.log(object.firstName + ' ' + object.lastName + ' year of birth is ' + object.yearOfBirth)
console.log('Is Aged ' + object.calculateAge() + ' Has max heart rate of ' + object.calculateMaxHeartRate() + ' and maxTarget rate of ' + object.calculateTargetHeartRate().toFixed(2));



//------------------------------------ Second question-------------------------------

// you will design a "starter" Profile class for a person. The class
// attributes should include the person's first name, last name, gender, date of 
// birth (consisting of separate attributes for the month,day and year of birth),
// height (in inches) and weight (in pounds). Your class should have a constructor
// that receives this data. For each attribute provide a property with set and get
// accessors. the class also should include methods that calculate and return the 
// user's age in years,maximum heart rate and target-heart-rate range (see previous
// question ) , and body mass index. Write an app that prompts for the person's
// information, instantiates an object of class Profile for that
// person and displays the information from that object - incluing the person's 
// first name, last name, gender , date of birth, height and weight. then calculates
// and displays the person's age in years, BMI (body mass index) , 
// maximum heart rate and target-heart-rate range.


class Starter {
    constructor(firstName, lastName, gender, day, month, yearOfBirth, currentYear, height, weight) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.currentYear = currentYear;
        this.gender = gender;
        this.day = day;
        this.month = month;
        this.height = height;
        this.weight = weight;
        this.age;
        this.maxHeartRate;
        this.targetHeartRate;
        this.bmi;
        this.dateOfBirth = this.day + '/' + this.month + '/' + this.yearOfBirth;
    }

    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }

    get getYearOfbirth() {
        return this.yearOfBirth
    }

    get getDay() {
        return this.day;
    }
    get geyMonth() {
        return this.month;
    }

    get getCurrentYear() {
        return this.currentYear;
    }

    get getWeight() {
        return this.weight;
    }

    get getHeight() {
        return this.height;
    }
    set setFirstName(fname) {
        this.firstName = fname;

    }
    set setLastName(lname) {
        this.LastName = lname;

    }
    set setYearOfBirth(yob) {
        this.yearOfBirth = yob;

    }
    set setCurrentYear(currentYear) {
        this.currentYear = currentYear;

    }
    set setDay(day) {
        this.day = day;
    }
    set setMonth(month) {
        this.month = month;
    }
    set setWeight(weight) {
        this.weight;
    }

    set setHeight(height) {
        this.height = height;
    }
    calculateAge() {
        this.age = this.currentYear - this.yearOfBirth
        return this.age;
    }
    calculateMaxHeartRate() {
        this.maxHeartRate = 220 - this.age;
        return this.maxHeartRate;
    }
    calculateTargetHeartRate() {
        this.targetHeartRate = 100 * (220 - this.age) / 220;
        return this.targetHeartRate;
    }

    calculateBMI() {
        this.bmi = this.weight / (this.height * this.height);
        return this.bmi;

    }

}

let object = new Starter('Mark', 'John', 'Male', 8, 10, 1996, 2020, 1.8, 80);
console.log(object.firstName + ' ' + object.lastName + ' has Date of birth of '
    + object.dateOfBirth + ' , his height in meter: ' + object.height + ' and Weight in kgs: ' + object.weight)
console.log('Is Aged ' + object.calculateAge() + ' ,Has max heart rate of ' + object.calculateMaxHeartRate()
    + ' , maxTarget rate of ' + object.calculateTargetHeartRate().toFixed(2) + ' and BMI is ' + object.calculateBMI().toFixed(2));





