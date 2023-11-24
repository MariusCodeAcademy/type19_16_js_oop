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
    console.log(JSON.stringify(this.#jobs, null, 2));
  }

  completeAJob(jobId) {
    console.log('darbas baigtas');
    // ieskoti darbo su id 'jobId',
    const found = this.#jobs.find(() => {});
    console.log('found ===', found);
    // radus iskviesti jam finishJob() metoda
  }
}
// prideti tuscia darbu masyva
// sukurti 2 freelancerius

const jobsARR = [
  {
    id: 'job_2',
    title: 'Headeris',
    amount: 300,
    done: false,
  },
  {
    id: 'job_1',
    title: 'Footeris',
    amount: 200,
    done: false,
  },
];
