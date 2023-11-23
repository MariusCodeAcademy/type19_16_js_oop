'use strict';

class MyWorker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, dollarPerHour) {
    // iskviesti tevines klases konstukroriu
    super(name, lastName);
    this.hourlyPay = dollarPerHour;
  }

  // metoda work(howMany)

  // metoda calPay
  calcPay() {
    console.log('skaiciuojam alga');
  }
}

console.log('WorkerClass was loaded');
