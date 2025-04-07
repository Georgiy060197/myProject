'use strict'

const name = document.getElementsByTagName('h1')
const button = document.getElementsByClassName('handler_btn')
const plus = document.querySelector('.screen-btn')
const otherItem1 = document.querySelectorAll('.other-items.percent')
const otherItem2 = document.querySelectorAll('.other-items.number')
const rollbackInput = document.querySelector('.rollback input')
const span = document.querySelector('.rollback span')
const totalInput = document.getElementsByClassName('total-input')
let allScreens = document.querySelectorAll('.screen')

for (let i = 0; i < totalInput.length; i++) {
    console.log(totalInput[i])
}

console.log(name[0].textContent)
console.log(button)
console.log(plus.textContent)
console.log(otherItem1)
console.log(otherItem2)
console.log(rollbackInput)
console.log(span)
// const appData = {
//     rollback: 30.5,
//     title: "",
//     screens: [],
//     screenPrice: 0,
//     serviceQuestion1: "",
//     //servicePrice1: 0,
//     serviceQuestion2: "",
//     //servicePrice2: 0,
//     servicePercentPrice: 0,
//     allServicePrices: 0,
//     fullPrice: 0,
//     services: {},
//     isNumber: function (num) {
//         return !isNaN(parseFloat(num)) && isFinite(num)
//     },
//     asking: function () {
//         appData.title = prompt("Как называется Ваш проект?", "Hello")

//         for (let i = 0; i < 2; i++) {
//             let name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
//             let price = 0
//             do {
//                 price = prompt("Сколько будет стоить данная работа?")
//             }
//             while (!appData.isNumber(price))
//             appData.screens.push({ id: i, name: name, price: +price })
//         }

//         appData.screenPrice = appData.screens.reduce(function (sum, item) {
//             return sum + item.price
//         }, 0)

//         for (let i = 0; i < 2; i++) {
//             let name = prompt("Какой дополнительный тип услуги нужен?")
//             let price = 0
//             do {
//                 price = prompt("Сколько это будет стоить?")
//             }

//             while (!appData.isNumber(price))
//             appData.services[name] = +price
//         }
//     },

//     getAllServicePrices: function () {
//         for (let key in appData.services) {
//             appData.allServicePrices += appData.services[key]
//         }

//     },
//     getFullPrice: function () {
//         appData.fullPrice = appData.screenPrice + appData.allServicePrices
//     },
//     getTitle: function () {
//         return appData.title.trim().charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase()
//     },
//     showTypeOf: function (variable) {
//         console.log(variable, typeof variable)
//     },
//     getRollbackMessage: function (price) {
//         switch (true) {
//             case price > 30000:
//                 console.log("Даем скидку в 10%");
//                 break
//             case price > 15000 && price < 30000:
//                 console.log("Даем скидку в 5%");
//                 break
//             case price > 0 && price < 15000:
//                 console.log("Скидка не предусмотрена");
//                 break
//             case price < 0:
//                 console.log("Что то пошло не так");
//                 break
//         }
//     },
//     getServicePercentPrices: function (price, callBack) {
//         appData.servicePercentPrice = price - callBack()
//     },
//     percentPrice: function () {
//         return appData.fullPrice * (appData.rollback / 100)
//     },
//     start: function () {
//         appData.asking()
//         appData.getAllServicePrices()
//         appData.getFullPrice()
//         appData.getServicePercentPrices(appData.fullPrice, appData.percentPrice)
//         appData.getTitle()
//         appData.getRollbackMessage(appData.fullPrice)
//         console.log(appData.screens)
//         console.log(appData.screenPrice)
//         appData.logger()
//     },
//     logger: function () {
//         for (let key in appData) {
//             console.log("Знаяение метода -" + " " + key + " " + "=" + " " + appData[key])
//         }
//     }
// }
// appData.start()