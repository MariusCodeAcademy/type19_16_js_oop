'use strict';
console.log('Job.js file was loaded');

class Job {
  id;
  title;
  amount;
  #done;
  constructor(jobTitle, jobAmount) {
    this.title = jobTitle;
    this.amount = jobAmount;
    this.#done = false;
  }

  // kai norim uzbaigti darba
  finishJob() {
    this.#done = true;
  }
}

const j1 = new Job('Footeris', 200);
console.log(' j1 ===', j1);
