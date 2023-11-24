'use strict';
console.log('app.js file was loaded');

// taikomes
const formEl = document.forms[0];
const nameEl = document.getElementById('name');
const lastNameEl = document.getElementById('lastName');
const hourlyPayEl = document.getElementById('hourlyPay');
const emplTypeSelectEl = document.getElementById('emplType');

const mainEmployeeArr = [];

let freeOrWork = 'myWorker';
// event listener
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('pateikta');
  const name = nameEl.value.trim();
  const lastName = lastNameEl.value.trim();
  const hourlyPay = hourlyPayEl.value.trim();
  // kurti arba free lancer arba worker
  if (freeOrWork === 'freelancer') {
    const fr1 = new Freelancer(name, lastName);
    console.log('fr1 ===', fr1);
    mainEmployeeArr.push(fr1);
  } else {
    const newWorker = new MyWorker(name, lastName, hourlyPay);
    console.log('newWorker ===', newWorker);
    mainEmployeeArr.push(newWorker);
  }

  console.log('mainEmployeeArr ===', mainEmployeeArr);
});

// darbuotas ar freelanceris
emplTypeSelectEl.addEventListener('change', () => {
  console.log('pasikete');
  // kokia select reiksme?
  freeOrWork = emplTypeSelectEl.value;
  console.log('freeOrWork ===', freeOrWork);
  // jei tipas freelancer slepiam  hourlyPayEl inputa
  if (freeOrWork === 'freelancer') {
    // usdeti hourlyPayEl el klase d-none
    hourlyPayEl.classList.add('d-none');
  } else {
    hourlyPayEl.classList.remove('d-none');
  }
});
