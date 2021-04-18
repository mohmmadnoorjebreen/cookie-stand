'use strict';

let Seattle = {
  nameOfLocation: 'seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  timeWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let arrayOfNomber =[];



    for(let i = 0; i <this.timeWork.length+1; i++) {
      let liElement = document.createElement('li');
      if(i<6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'am: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }
      else if (i===6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }else {
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i-6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }


      console.log(arrayOfNomber);

      if(this.timeWork.length+1===arrayOfNomber.length){
        let n1 = arrayOfNomber[0];
        let n2 = arrayOfNomber[1];
        let n3 = arrayOfNomber[2];
        let n4 = arrayOfNomber[3];
        let n5 = arrayOfNomber[4];
        let n6 = arrayOfNomber[5];
        let n7 = arrayOfNomber[6];
        let n8 = arrayOfNomber[7];
        let n9 = arrayOfNomber[8];
        let n10 = arrayOfNomber[9];
        let n11 = arrayOfNomber[10];
        let n12 = arrayOfNomber[11];
        let n13 = arrayOfNomber[12];
        let n14 = arrayOfNomber[13];
        let sum = +n1 + +n2 + +n3 + +n4 + +n5 + +n6 + +n7 + +n8 + +n9 + +n10 + +n11 + +n12 + +n13 + +n14 ;
        console.log(sum);
        liElement.textContent= 'total: ' + (sum);
        ulElement.appendChild(liElement);
      }
    }
  }
};

let Tokyo = {
  nameOfLocation: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  timeWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let arrayOfNomber =[];



    for(let i = 0; i <this.timeWork.length+1; i++) {
      let liElement = document.createElement('li');
      if(i<6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'am: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }
      else if (i===6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }else {
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i-6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }


      console.log(arrayOfNomber);

      if(this.timeWork.length+1===arrayOfNomber.length){
        let n1 = arrayOfNomber[0];
        let n2 = arrayOfNomber[1];
        let n3 = arrayOfNomber[2];
        let n4 = arrayOfNomber[3];
        let n5 = arrayOfNomber[4];
        let n6 = arrayOfNomber[5];
        let n7 = arrayOfNomber[6];
        let n8 = arrayOfNomber[7];
        let n9 = arrayOfNomber[8];
        let n10 = arrayOfNomber[9];
        let n11 = arrayOfNomber[10];
        let n12 = arrayOfNomber[11];
        let n13 = arrayOfNomber[12];
        let n14 = arrayOfNomber[13];
        let sum = +n1 + +n2 + +n3 + +n4 + +n5 + +n6 + +n7 + +n8 + +n9 + +n10 + +n11 + +n12 + +n13 + +n14 ;
        console.log(sum);
        liElement.textContent= 'total: ' + (sum);
        ulElement.appendChild(liElement);
      }
    }
  }
};

let Dubai = {
  nameOfLocation: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  timeWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let arrayOfNomber =[];



    for(let i = 0; i <this.timeWork.length+1; i++) {
      let liElement = document.createElement('li');
      if(i<6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'am: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }
      else if (i===6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }else {
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i-6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }


      console.log(arrayOfNomber);

      if(this.timeWork.length+1===arrayOfNomber.length){
        let n1 = arrayOfNomber[0];
        let n2 = arrayOfNomber[1];
        let n3 = arrayOfNomber[2];
        let n4 = arrayOfNomber[3];
        let n5 = arrayOfNomber[4];
        let n6 = arrayOfNomber[5];
        let n7 = arrayOfNomber[6];
        let n8 = arrayOfNomber[7];
        let n9 = arrayOfNomber[8];
        let n10 = arrayOfNomber[9];
        let n11 = arrayOfNomber[10];
        let n12 = arrayOfNomber[11];
        let n13 = arrayOfNomber[12];
        let n14 = arrayOfNomber[13];
        let sum = +n1 + +n2 + +n3 + +n4 + +n5 + +n6 + +n7 + +n8 + +n9 + +n10 + +n11 + +n12 + +n13 + +n14 ;
        console.log(sum);
        liElement.textContent= 'total: ' + (sum);
        ulElement.appendChild(liElement);
      }
    }
  }
};

let Paris = {
  nameOfLocation: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,

  timeWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let arrayOfNomber =[];



    for(let i = 0; i <this.timeWork.length+1; i++) {
      let liElement = document.createElement('li');
      if(i<6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'am: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }
      else if (i===6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }else {
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i-6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }


      console.log(arrayOfNomber);

      if(this.timeWork.length+1===arrayOfNomber.length){
        let n1 = arrayOfNomber[0];
        let n2 = arrayOfNomber[1];
        let n3 = arrayOfNomber[2];
        let n4 = arrayOfNomber[3];
        let n5 = arrayOfNomber[4];
        let n6 = arrayOfNomber[5];
        let n7 = arrayOfNomber[6];
        let n8 = arrayOfNomber[7];
        let n9 = arrayOfNomber[8];
        let n10 = arrayOfNomber[9];
        let n11 = arrayOfNomber[10];
        let n12 = arrayOfNomber[11];
        let n13 = arrayOfNomber[12];
        let n14 = arrayOfNomber[13];
        let sum = +n1 + +n2 + +n3 + +n4 + +n5 + +n6 + +n7 + +n8 + +n9 + +n10 + +n11 + +n12 + +n13 + +n14 ;
        console.log(sum);
        liElement.textContent= 'total: ' + (sum);
        ulElement.appendChild(liElement);
      }
    }
  }
};

let Lima = {
  nameOfLocation: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  timeWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],

  render: function() {
    const parentElement = document.getElementById('numberOfCookies');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.nameOfLocation;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    let arrayOfNomber =[];



    for(let i = 0; i <this.timeWork.length+1; i++) {
      let liElement = document.createElement('li');
      if(i<6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'am: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }
      else if (i===6){
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i+6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }else {
        let number = (getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers,this.averageCookiesPerCustomer));
        arrayOfNomber.push(number);
        liElement.textContent = i-6+'pm: '+ number+' Cookies';
        ulElement.appendChild(liElement);

      }


      console.log(arrayOfNomber);

      if(this.timeWork.length+1===arrayOfNomber.length){
        let n1 = arrayOfNomber[0];
        let n2 = arrayOfNomber[1];
        let n3 = arrayOfNomber[2];
        let n4 = arrayOfNomber[3];
        let n5 = arrayOfNomber[4];
        let n6 = arrayOfNomber[5];
        let n7 = arrayOfNomber[6];
        let n8 = arrayOfNomber[7];
        let n9 = arrayOfNomber[8];
        let n10 = arrayOfNomber[9];
        let n11 = arrayOfNomber[10];
        let n12 = arrayOfNomber[11];
        let n13 = arrayOfNomber[12];
        let n14 = arrayOfNomber[13];
        let sum = +n1 + +n2 + +n3 + +n4 + +n5 + +n6 + +n7 + +n8 + +n9 + +n10 + +n11 + +n12 + +n13 + +n14 ;
        console.log(sum);
        liElement.textContent= 'total: ' + (sum);
        ulElement.appendChild(liElement);
      }
    }
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
  return avgCookies( ((Math.random() * (max - min + 1) + min)),avg); //The maximum is inclusive and the minimum is inclusive
}
function avgCookies(random,avg){


  return Math.floor(random * avg) ;

}



