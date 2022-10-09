class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    numberOfStudents(newNumberOfStudents) {
        if(typeof newNumberOfStudents !== 'number') {
            console.log('Invalid input: numberOfStudents must be set to a number.')
        } else {
            this._numberOfStudents = newNumberOfStudents;
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let numberOfSubstituteTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[numberOfSubstituteTeacher];
    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'high', numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() {
        console.log(this._sportsTeam);
    }
}

class SchoolCatalogue {
    constructor(level, school) {
        this._catalogue = [
            {
                'level': level,
                'school': school
            }
        ]
    }

    findByLevel(schoolLevel) {
        let check = this._catalogue.find(school => school.level === schoolLevel);
        if (typeof check == 'undefined') {
            console.log(`No ${schoolLevel} school exists in the catalogue`);
        } else {
            return check.school;
        }
    }
    
    findByName(schoolName) {
        let check = this._catalogue.find(school => school.school.name == schoolName);
        if (typeof check == 'undefined') {
            console.log(`No school by the name ${schoolName} exists in the catalogue`);
        } else {
            return check.school;
        }
    }

    addSchool(schoolLevel, schoolObject) {
        let check = this._catalogue.find(school => school.level === schoolLevel);
        if (typeof check !== 'undefined') {
            console.log(`You can only add one of each level to this catalogue, and the ${schoolLevel} school in this catalogue is already ${check.school.name}.`);
        } else {
            this._catalogue.push(
                {
                    'level': schoolLevel,
                    'school': schoolObject
                }
            )
        }
    }
}

// Step 14: create a primary school
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// Step 15: call quick facts
// lorraineHansbury.quickFacts();

// Step 16: generate a substitute teacher
// console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

// Step 17: create a high school
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// alSmith.numberOfStudents('hello');

// Step 18: get the sports team
// alSmith.sportsTeam;

// Step 19.1: create a middle school
const testMiddleSchool = new MiddleSchool('Test Middle School', 4589);
// console.log(testMiddleSchool);

// Step 19.3: create a school catalogue
const schoolCat = new SchoolCatalogue('primary', lorraineHansbury);
console.log('The school catalogue begins as: ');
console.log(schoolCat);
console.log('********************')

schoolCat.addSchool('primary', lorraineHansbury);
console.log(schoolCat)
console.log('********************')

schoolCat.addSchool('middle', testMiddleSchool);
console.log(schoolCat.findByLevel('primary'));
console.log(schoolCat.findByLevel('middle'));
console.log(schoolCat.findByLevel('high'));
console.log('********************')

console.log(schoolCat.findByName('Lorraine Hansbury'));
console.log(schoolCat.findByName('Al E. Smith'));

// schoolCat.addSchool('high', alSmith);