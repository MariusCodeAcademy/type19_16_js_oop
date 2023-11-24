'use strict';
console.log('Freelancer.js file was loaded');

// sukurti clase
class Freelancer extends Employee {
  #jobs = [];
  // praplesti Employee
  constructor(fName, lName) {
    super(fName, lName);
  }

  assingJob(newJob) {
    // prideti argumentu gauta darba i darbu masyva
    // patikrtinti ar newJob yra darbo objektas sukurtas pagal
    // Job klase
    if (!(newJob instanceof Job)) {
      console.warn('netikras darbas', newJob);
      return;
    }
    this.#jobs.push(newJob);

    console.log('this.#jobs ===', this.#jobs);
  }
}
// prideti tuscia darbu masyva
// sukurti 2 freelancerius
