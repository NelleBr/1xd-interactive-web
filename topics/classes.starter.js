/*
__    __  ____ 
/  \  /  \(  _ \
(  O )(  O )) __/
\__/  \__/(__)  

*/

class Student {
    constructor(firstname, name) {
        // error 1 opgelsot
        this.name = name;
        this.firstname = firstname;
    }

    getFullName() {
        return `${this.firstname} ${this.name}`; // error 2 opgelost
    }

    printStudentCard() {
        const card = document.createElement("div");
        card.innerHTML = `${this.firstname} ${this.name}`; // error 3 opgelost
        document.querySelector("#studentCard").appendChild(card); // error 4 opgelost
    }
}

// 1 - build the functionality listed below and fix the errors in the Student class
//   - create a new instance of the student
//   - log the full student name via the getFullName method
//   - call printStudentCard method to print the card on your screen inside #studentCard container

const student = new Student("John", "Smith");
// continue below

console.log(student.getFullName());

student.printStudentCard();