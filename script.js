'use strict'
const rollback = 30.5
let title
let screens
let screenPrice
let serviceQuestion1
let servicePrice1
let serviceQuestion2
let servicePrice2

//const adaptive = confirm("Нужен ли адаптив на сайте?", "Да, нет")

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}
const asking = function () {
    title = prompt("Как называется Ваш проект?", "Hello")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?")
    }
    while (!isNumber(screenPrice))
    screenPrice = Number(screenPrice)

    serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?")
    while (!isNumber(servicePrice1)) {
        servicePrice1 = prompt("Сколько это будет стоить?")
    }
    servicePrice1 = Number(servicePrice1)

    serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?")
    while (!isNumber(servicePrice2)) {
        servicePrice2 = prompt("Сколько это будет стоить?")
    }
    servicePrice2 = Number(servicePrice2)
}

const allServicePrices = function getFullPrice() {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices()
}
const fullPrice = getFullPrice

function getTitle() {
    return title.trim().charAt(0).toUpperCase() + title.slice(1).toLowerCase()
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const servicePercentPrice = function getServicePercentPrices(price, callBack) {
    return price - callBack()
}
const percentPrice = function () {
    return fullPrice * (rollback / 100)
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price > 30000:
            console.log("Даем скидку в 10%");
            break
        case price > 15000 && price < 30000:
            console.log("Даем скидку в 5%");
            break
        case price > 0 && price < 15000:
            console.log("Скидка не предусмотрена");
            break
        case price < 0:
            console.log("Что то пошло не так");
            break
    }
}

asking()
console.log(allServicePrices())
console.log(fullPrice())
console.log(getTitle())
console.log(servicePercentPrice(fullPrice(), percentPrice))
getRollbackMessage(fullPrice())
showTypeOf(title)
showTypeOf(fullPrice())
