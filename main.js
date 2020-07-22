"use strict";

/* const ageCheck = (age) => {
    if (age<21) 
    console.log("No dringks for you!")
}else {
    console.log("PARTAY!!!")
}

ageCheck(12)
ageCheck(21)

const lengthOutput = (strang) => {
    return strang.length
}

console.log(lengthOutput("teresa"));

const quoteFinder = (testString) => {
    return "winter is coming".indexOf(testString)
}

console.log(quoteFinder("is")); */

const employee = {
    firstName: "Wendell",
    lastName: "Patton",
    role: "student",
    accountNumber: "1-8475698347",
    isManager: false,
    titles: ["Sr. Developer", "Kang"],
    accolade: {
        title: "Employee of the Year",
        dateEarned: "1/2/2020",
        expires: "12/31/2020",
        isCool: true
    }
}

//console.log(employee.firstName);

//const keyToCheck = "accolade";

//console.log(employee[keyToCheck]);
//console.log(employee.accolade.isCool);
//console.log(employee[keyToCheck]["isCool"]);
//console.log(employee[keyToCheck].isCool);

//create a function that takes in an employee, if the employees ////firstName starts with a W then add a key=status and value="vip"
//if the employees firstName does not start with a W then add a key=status and value="pesant"

let employeeStatus = (employeeName) => {
    if (employeeName.firstName[0]=== "W") {
        employeeName.status = "vip"
    } else {
        employeeName.status = "pesant"
    }
}
    


