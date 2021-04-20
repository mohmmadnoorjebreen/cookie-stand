'use strict';

let numberOfHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const parentElement = document.getElementById('numberOfCookies');

const articleElement = document.createElement('article');
parentElement.appendChild(articleElement);

function Cookies (nameOfLocation ,minHourlyCustomers,maxHourlyCustomers,averageCookiesPerCustomer)
{
  this.nameOfLocation =nameOfLocation;
  this.minHourlyCustomers =minHourlyCustomers;
  this.maxHourlyCustomers =maxHourlyCustomers;
  this.averageCookiesPerCustomer =averageCookiesPerCustomer;
  this.cookiesPerHour = [];
  this.total =0;
}

Cookies.prototype.render = function (){




  const trElement = document.createElement('tr');
  articleElement.appendChild(trElement);

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
  const tdElementD = document.createElement('td');
  trElement.appendChild(tdElementD);
  tdElementD.textContent = this.total;
};

function hures(){

  const trElementT = document.createElement('tr');
  articleElement.appendChild(trElementT);

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

function total(){

  const trElementT = document.createElement('tr');
  articleElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);

  tdElementT.textContent = 'Total';
  let totalTotals = [];
  let totalT = 0;
  for (let i = 0 ; i < numberOfHours.length;i++){

    let totalHour = (seattle.cookiesPerHour[i]+tokyo.cookiesPerHour[i]+dubai.cookiesPerHour[i]+paris.cookiesPerHour[i]+lima.cookiesPerHour[i]);
    totalTotals.push(totalHour);
    totalT += totalHour;
    console.log(seattle.cookiesPerHour[i]);
    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = totalTotals[i];


  }
  const tdElementD = document.createElement('td');
  trElementT.appendChild(tdElementD);
  tdElementD.textContent = totalT;
}


total();








// General helper function
function getRandomNumber(min,max,avg) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil((Math.random() * (max - min + 1) + min)*avg); //The maximum is inclusive and the minimum is inclusive
}



