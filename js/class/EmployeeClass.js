'use strict';
console.log('EmployeeClass.js file was loaded');

class Employee {
  firstName;
  lastName;
  constructor(argName, argSurname) {
    this.firstName = argName;
    this.lastName = argSurname;
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // imituojam abstakcia klase
  calcPay() {
    throw new Error('reikia aprasyti calcPay');
  }
}

class Worker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    // iskviesti tevines klases konstukroriu
    super(name, lastName);
    this.hourlyPay = dollarPerHour;
  }
}

// sukurti TownWorker clase,
// praplecia Worker klase
// sukurdami nauja TownWorkeri papildomai pridesim miesta

const em1 = new Employee('James', 'Bond');
const wor1 = new Worker('Mike', 'Kurt', 10);
console.log('em1 ===', em1);
em1.printFullName();
console.log('wor1 ===', wor1);
wor1.printFullName();
