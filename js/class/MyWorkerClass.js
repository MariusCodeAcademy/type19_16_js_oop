'use strict';

class MyWorker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    // iskviesti tevines klases konstukroriu
    super(name, lastName);
    this.hourlyPay = dollarPerHour;
  }
}

console.log('WorkerClass was loaded');
