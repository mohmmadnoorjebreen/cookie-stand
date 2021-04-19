'use strict';

let numberOfHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



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
  const parentElement = document.getElementById('numberOfCookies');

  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  const tableElement = document.createElement('table');
  articleElement.appendChild(tableElement);


  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);

  const tdElement = document.createElement('td');
  trElement.appendChild(tdElement);

  const trElementT = document.createElement('tr');
  tableElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);


  tdElement.textContent = this.nameOfLocation;

  for (let i = 0 ; i < numberOfHours.length; i++){
    let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
    this.cookiesPerHour.push(cookie);
    this.total += cookie;
    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = (`${this.cookiesPerHour[i]} `);
    // console.log(this.cookiesPerHour[i]);
  }
};






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



function Total(x,y,q,e,r){
  this.h1 = x;
  this.h2 = y;
  this.h3 = q;
  this.h4 = e;
  this.h5 = r;
  this.totalTotals = [];
}

Total.prototype.render = function(){
  const parentElement = document.getElementById('numberOfCookies');

  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  const tableElement = document.createElement('table');
  articleElement.appendChild(tableElement);
  const trElementT = document.createElement('tr');
  tableElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);

  tdElementT.textContent = 'Total';

  for (let i = 0 ; i < numberOfHours.length;i++){

    let totalHour = (this.h1[i]+this.h2[i]+this.h3[i]+this.h4[i]+this.h5[i]);
    this.totalTotals.push(totalHour);
    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = this.totalTotals[i];

    console.log(this.totalTotals[i]);
  }
};



let total = new Total(seattle.cookiesPerHour,tokyo.cookiesPerHour,dubai.cookiesPerHour,paris.cookiesPerHour,paris.cookiesPerHour);

total.render();




// General helper function
function getRandomNumber(min,max,avg) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil((Math.random() * (max - min + 1) + min)*avg); //The maximum is inclusive and the minimum is inclusive
}



