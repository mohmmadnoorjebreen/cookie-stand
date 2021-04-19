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

function Hour(hours){
  this.hours = hours;
}

Hour.prototype.render = function (){

  const parentElement = document.getElementById('numberOfCookies');

  const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);

  const tableElement = document.createElement('table');
  articleElement.appendChild(tableElement);
  const trElementT = document.createElement('tr');
  tableElement.appendChild(trElementT);

  const tdElementT = document.createElement('td');
  trElementT.appendChild(tdElementT);

  tdElementT.textContent = [ 'space'] ;

  for (let i = 0 ; i < numberOfHours.length; i++){

    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = this.hours[i];
    console.log(this.hours[i]);
  }
  const tdElementD = document.createElement('td');
  trElementT.appendChild(tdElementD);
  tdElementD.textContent = 'Daily Location Total';
};

function Total(seat,tok,dub,par,lim){
  this.seat = seat;
  this.tok = tok;
  this.dub = dub;
  this.par = par;
  this.lim = lim;
  this.totalTotals = [];
  this.total = 0;
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

    let totalHour = (this.seat[i]+this.tok[i]+this.dub[i]+this.par[i]+this.lim[i]);
    this.totalTotals.push(totalHour);
    this.total += totalHour;
    const tdElementT = document.createElement('td');
    trElementT.appendChild(tdElementT);
    tdElementT.textContent = this.totalTotals[i];


  }
  const tdElementD = document.createElement('td');
  trElementT.appendChild(tdElementD);
  tdElementD.textContent = this.total;
};



let hours = new Hour (numberOfHours);
hours.render();
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

let total = new Total(seattle.cookiesPerHour,tokyo.cookiesPerHour,dubai.cookiesPerHour,paris.cookiesPerHour,paris.cookiesPerHour);

total.render();









// General helper function
function getRandomNumber(min,max,avg) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil((Math.random() * (max - min + 1) + min)*avg); //The maximum is inclusive and the minimum is inclusive
}



