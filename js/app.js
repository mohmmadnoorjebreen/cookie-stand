'use strict';

let numberOfHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let Seattle = {
  nameOfLocation: 'seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesPerHour: [],
  total: 0,

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0 ; i < numberOfHours.length; i++){
      let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(cookie);
      this.total += cookie;
      console.log(`${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}` );
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}`;
    }
    const tliElement = document.createElement('li');
    ulElement.appendChild(tliElement);
    tliElement.textContent = `${'Total'} :${this.total}  ${'cookies'}`;
    console.log(this.total);
  }
};

let Tokyo = {
  nameOfLocation: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  total: 0,

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0 ; i < numberOfHours.length; i++){
      let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(cookie);
      this.total += cookie;
      console.log(`${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}` );
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}`;
    }
    const tliElement = document.createElement('li');
    ulElement.appendChild(tliElement);
    tliElement.textContent = `${'Total'} :${this.total}  ${'cookies'}`;
    console.log(this.total);
  }
};

let Dubai = {
  nameOfLocation: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesPerHour: [],
  total: 0,

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0 ; i < numberOfHours.length; i++){
      let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(cookie);
      this.total += cookie;
      console.log(`${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}` );
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}`;
    }
    const tliElement = document.createElement('li');
    ulElement.appendChild(tliElement);
    tliElement.textContent = `${'Total'} :${this.total}  ${'cookies'}`;
    console.log(this.total);
  }
};

let Paris = {
  nameOfLocation: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  cookiesPerHour: [],
  total: 0,
  

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0 ; i < numberOfHours.length; i++){
      let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(cookie);
      this.total += cookie;
      console.log(`${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}` );
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}`;
    }
    const tliElement = document.createElement('li');
    ulElement.appendChild(tliElement);
    tliElement.textContent = `${'Total'} :${this.total}  ${'cookies'}`;
    console.log(this.total);
  }
};

let Lima = {
  nameOfLocation: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  cookiesPerHour: [],
  total: 0,

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0 ; i < numberOfHours.length; i++){
      let cookie = getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer);
      this.cookiesPerHour.push(cookie);
      this.total += cookie;
      console.log(`${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}` );
      let liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${numberOfHours[i]}: ${this.cookiesPerHour[i]} ${'cookies'}`;
    }
    const tliElement = document.createElement('li');
    ulElement.appendChild(tliElement);
    tliElement.textContent = `${'Total'} :${this.total}  ${'cookies'}`;
    console.log(this.total);
  }
};




Seattle.render();

Tokyo.render();

Dubai.render();

Paris.render();

Lima.render();

// General helper function
function getRandomNumber(min,max,avg) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.ceil((Math.random() * (max - min + 1) + min)*avg); //The maximum is inclusive and the minimum is inclusive
}


