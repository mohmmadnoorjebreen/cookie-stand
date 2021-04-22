'use strict';

let numberOfHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const parentElement = document.getElementById('numberOfCookies');

const tableElement = document.createElement('table');
parentElement.appendChild(tableElement);

const salmonCookies = document.getElementById('salmonCookies');

let x = [];


function Cookies (nameOfLocation ,minHourlyCustomers,maxHourlyCustomers,averageCookiesPerCustomer)
{
  this.nameOfLocation =nameOfLocation;
  this.minHourlyCustomers =minHourlyCustomers;
  this.maxHourlyCustomers =maxHourlyCustomers;
  this.averageCookiesPerCustomer =averageCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.total =0;
  x.push(this);
}

Cookies.prototype.render = function (){




  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  const tdElement = document.createElement('td');
  trElement.appendChild(tdElement);

  tdElement.textContent = this.nameOfLocation;

  for (let i = 0 ; i < numberOfHours.length; i++){
    let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
    this.cookiesPerHour.push(cookie);
    this.total += cookie;
    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = (`${this.cookiesPerHour[i]} `);

  }
  const tdElementDd = document.createElement('td');
  trElement.appendChild(tdElementDd);
  tdElementDd.textContent = this.total;
};

function hures(){

  const trElementT = document.createElement('tr');
  tableElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);

  tdElementT.textContent = '';

  for (let i = 0 ; i < numberOfHours.length; i++){

    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = numberOfHours[i];
    // console.log(numberOfHours[i]);
  }
  const tdElementD = document.createElement('td');
  trElementT.appendChild(tdElementD);
  tdElementD.textContent = 'Daily Location Total';
}




hures();

let seattle = new Cookies('seattle',23,65,6.3);
seattle.render();

let tokyo = new Cookies('tokyo',3,24,1.2);
tokyo.render();


let dubai = new Cookies('dubai',11,38,3.7);
dubai.render();

let paris = new Cookies('paris',20,38,2.3);
paris.render();

let lima = new Cookies('lima',2,16,4.6);
lima.render();

console.log(lima.total);
total();

salmonCookies.addEventListener('submit', newLocations);

function total(){

  const trElementT = document.createElement('tr');
  tableElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);

  tdElementT.textContent = 'Total';

  let totalT = 0;

  for (let i = 0 ; i < numberOfHours.length;i++){

    let totalHour = 0;

    for(let j = 0; j< x.length;j++){
      totalHour += x[j].cookiesPerHour[i];

      totalT += x[j].cookiesPerHour[i];
      // console.log(seattle.cookiesPerHour[i]);



    }
    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = totalHour;


  }
  const tdElementD = document.createElement('td');
  trElementT.appendChild(tdElementD);
  tdElementD.textContent = totalT;

}

function newLocations(event) {
  event.preventDefault();

  let rowCount = tableElement.rows.length;

  tableElement.deleteRow(rowCount -1);

  let nameLocations = event.target.Location.value;
  let min = event.target.minHour.value;
  let max = event.target.maxHour.value;
  let avg = event.target.average.value;


  let newLocatoin = new Cookies(nameLocations, min, max, avg);

  newLocatoin.render();



  total();

  salmonCookies.reset();


  // console.log(newLocatoin);

}
















// General helper function
function getRandomNumber(min,max,avg) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil((Math.random() * (max - min + 1) + min)*avg); //The maximum is inclusive and the minimum is inclusive
}



