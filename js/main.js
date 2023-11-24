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

const darbuotojai = [
  new MyWorker('James', 'Band', 10), // 0
  new MyWorker('Jane', 'Dow', 15), // 1
  new MyWorker('Mike', 'Tyson', 25), // 2
  new Freelancer('Serbentauas', 'Bordiuras'), // 3
  new Freelancer('Mark', 'Brown'), // 4
];
console.log('darbuotojai ===', darbuotojai);

// darbuotai dibra darbo laika
darbuotojai[0].work(80);
darbuotojai[1].work(100);
darbuotojai[2].work(160);

// sukuriami darbai freelanceriam
const jobsArr = [
  new Job('Footeris', 200), // 0
  new Job('Headeris', 300), // 1
  new Job('Aside', 400), // 2
  new Job('Main', 500), // 3
  new Job('email', 150), // 4
];

// freelanceriam priskiriam darbus
darbuotojai[3].assingJob(jobsArr[0]);
darbuotojai[3].assingJob(jobsArr[1]);
darbuotojai[3].assingJob(jobsArr[2]);
darbuotojai[4].assingJob(jobsArr[3]);
darbuotojai[4].assingJob(jobsArr[4]);

// frelanceriai atlieka darbus
darbuotojai[3].completeAJob(jobsArr[2].id);
darbuotojai[4].completeAJob(jobsArr[3].id);
darbuotojai[4].completeAJob(jobsArr[4].id);

// console.log('darbuotojai[4] ===', darbuotojai[4]);
// console.log('darbuotojai[3] ===', darbuotojai[3]);

// norim atspausdinti su konsole
// 'James Bond ismoketi 1000 eur'
// sukti cikla per darbuotojai
// su printFullName gaunam varda ir pavarde
// su calcPay gaunam alga
darbuotojai.forEach(() => {});
