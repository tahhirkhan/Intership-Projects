// ParentSchool Class:
class School {

    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    // GETTERS:

    getName() {
        return this._name;
    }

    getLevel() {
        return this._level;
    }

    getNoOfStudents() {
        return this._numberOfStudents;
    }

    // QuickFacts:
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }

    static pickSubstituteTeacher(substituteTeacher) {
        let x = Math.floor(Math.random() * substituteTeacher.length);
        console.log(substituteTeacher[x]);
    }


    // SETTERS:

    setNoOfStudents(newNoOfStudents) {
        if (typeof newNoOfStudents === "number") {
            this._numberOfStudents = newNoOfStudents;
        } 
        else {
            console.log("invalid input: numberOfStudents must be set to a Number.")
        }
    }
}


// PrimarySchool Class:

class PrimarySchool extends School {

    constructor(name, pickupPolicy, numberOfStudents) {
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    getPickupPolicy() {
        return this._pickupPolicy;
    }
}


// HighSchool Class:

class HighSchool extends School {
    constructor(name, sportsTeam, noOfStudents) {
        super(name, "High School", noOfStudents);
        this.sportsTeam = sportsTeam;
    }

    // GETTER METHOD:
    getSportsTeams() {
        return this.sportsTeam;
    }
}


// Instances of Primary and High Schools:

// Primary School:
const PickupPolicy = "Students must be picked by a parent, guardian, or a family memeber over the age of 13";
substituteTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

const lorrianHansbury = new PrimarySchool("Lorrian Hansbury", PickupPolicy, 514);
lorrianHansbury.quickFacts();
School.pickSubstituteTeacher(substituteTeacher);

// High School:
const SportsTeams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];

const alSmith = new HighSchool("Al E. Smith", SportsTeams, 415);
console.log(alSmith.getSportsTeams());
