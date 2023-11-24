'use strict';
console.log('main.js file was loaded');

// taikomes
const formEl = document.forms[0];
const nameEl = document.getElementById('name');
const lastNameEl = document.getElementById('lastName');
const hourlyPayEl = document.getElementById('hourlyPay');

const mainEmployeeArr = [];

// event listener
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('pateikta');
  const name = nameEl.value.trim();
  const lastName = lastNameEl.value.trim();
  const hourlyPay = hourlyPayEl.value.trim();
  const newWorker = new MyWorker(name, lastName, hourlyPay);
  console.log('newWorker ===', newWorker);
  mainEmployeeArr.push(newWorker);
  console.log('mainEmployeeArr ===', mainEmployeeArr);
});

// const em1 = new Employee('James', 'Bond');
// console.log('em1 ===', em1);
const wor1 = new MyWorker('Mike', 'Kurt', 10);
const wor2 = new MyWorker('James', 'Bond', 15);
// console.log('wor1 ===', wor1);

const free1 = new Freelancer('Jane', 'Dow');
console.log('free1 ===', free1);
// free1.calcPay();
// free1.printFullName();

const jobsArr = [
  new Job('Footeris', 200),
  new Job('Headeris', 300),
  new Job('Aside', 400),
  new Job('Main', 500),
  new Job('email', 150),
];
// free1 freelanceriui priskirti Headeris darba
free1.assingJob(jobsArr[1]);
free1.assingJob(jobsArr[0]);
free1.assingJob(jobsArr[2]);
free1.assingJob(jobsArr[3]);
// free1.assingJob({ title: 'labai gerai', pinigu: 10000 });

// free1 nori uzbaigti darba su id === "job_2"
free1.completeAJob('job_1');
free1.completeAJob('job_3');

free1.calcPay();
console.log('free1 ===', free1);
