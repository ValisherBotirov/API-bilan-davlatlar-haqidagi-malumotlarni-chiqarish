'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const searchInput = document.querySelector('.input--search');
const searchBtn = document.querySelector('.btn--search');
const exit = document.querySelector('.country__ex');
let country;
let setArr = [];
let set;

///////////////////////////////////////

// const getCountryInfo = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);

//     chegaradosh(data);
//   });

//   // const request2 = new XMLHttpRequest();
//   // request2.open('GET', `https://restcountries.com/v2/alpha/${border}`);
//   // request2.send();

//   // request2.addEventListener('load', function () {
//   //   let data1 = JSON.parse(request2.responseText);
//   //   console.log(data1);
//   //   chegaradosh(data1);
//   // });
// };

// searchBtn.addEventListener('click', function (e) {
//   e.preventDefault();

//   country = searchInput.value;
//   setArr.push(country);
//   searchInput.value = '';
//   console.log(setArr);
//   // set = new Set(setArr);
//   console.log(set);
//   getCountryInfo(country);
// getLocal();
// setLocal();
// });

// exit.addEventListener('click', function () {
//   countriesContainer.style.opacity = 0;
// });

// function setLocal() {
//   localStorage.setItem('set', JSON.stringify(setArr));
// }
// function getLocal() {
//   let data = JSON.parse(localStorage.getItem('setArr'));
//   if (!data) return;

//   setArr = data;
//   setArr.forEach(function (val) {
//     return getCountryInfo(...val);
//   });
// }

// =======================================================================================
// ForEach bilan hamma davlatni bittaga chiqarish
// ==================================================================================
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/all`);
// request.send();

// request.addEventListener('load', function () {
//   const data = JSON.parse(request.responseText);
//   console.log(data);
//   data.forEach(function (val) {
//     console.log(val);
//     let html = `
//       <article class="country">
//      <img class="country__img" src="${val.flag}" />
//      <div class="country__data">
//        <h3 class="country__name">${val.name}</h3>
//        <h4 class="country__region">${val.region}</h4>
//        <p class="country__row"><span>👫</span>${(
//          val.population / 1000000
//        ).toFixed(2)} people</p>
//        <p class="country__row"><span>🗣️</span>${val.languages[0].name}</p>
//      </div>
//    </article>
//      `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//   });

//   countriesContainer.style.opacity = 1;
// });

// =======================================================================
// const chegaradosh = function (data, className) {
//   let html = `
// <article class="country ${className}">
// <img class="country__img" src="${data.flag}" />
// <div class="country__data">
//  <h3 class="country__name">${data.name}</h3>
//  <h4 class="country__region">${data.region}</h4>
//  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
//    2
//  )} people</p>
//  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//  <p class ="country__ex">✖</p>

// </div>
// </article>
// `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
//   // countriesContainer.style.textAlign = 'center';
// };

// const htmlError = function (err) {
//   let div = document.createElement('div');
//   div.innerHTML = `<h1>Xato malumot kelmoqda</h1> <h1>${err.statusText} ${err.status}`;
//   countriesContainer.append(div);
//   countriesContainer.style.opacity = 1;
// };

// const xatolik = function (response, msg) {
//   if (!response.ok) {
//     htmlError(response);
//     throw new Error(`${msg} ${response.statusText}${response.status}`);
//   }
// };

// const getJSON = function (url, msg) {
//   return fetch(url).then(response => {
//     xatolik(response, msg);
//     return response.json();
//   });
// };

// getJSON('https://restcountries.com/v2/name/uzbekistan', 'davlatni topolmadim')
//   .then(function (res) {
//     let [data] = res;
//     console.log(data);
//     chegaradosh(data);
//     let border = data.borders[0];
//     return border;
//   })
//   .then(function (bor) {
//     console.log(bor);
//     // fetch(`https://restcountries.com/v2/alpha/${bor}`)
//     //   .then(function (response) {
//     //     console.log(response);
//     //     xatolik(response);
//     //     return response.json();
//     //   })
//     getJSON(
//       `https://restcountries.com/v2/alpha/${bor}`,
//       `Qo'shni davlatni topolmadim`
//     ).then(function (res) {
//       console.log(res);
//       let data1 = res;
//       chegaradosh(data1);
//     });
//   })
//   .catch(function (error) {
//     alert(error);
//   });

// // xato usuli
