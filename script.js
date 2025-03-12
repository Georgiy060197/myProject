'use strict'
const title = prompt("Как называется Ваш проект?")
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
const screenPrice = +prompt("Сколько будет стоить данная работа?")
const rollback = 30.5
const serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice1 = +prompt("Сколько это будет стоить?")
const serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice2 = +prompt("Сколько это будет стоить?")
//const adaptive = confirm("Нужен ли адаптив на сайте?", "Да, нет")


const allServicePrices = function getFullPrice() {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices()
}
let fullPrice = getFullPrice()

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

console.log(allServicePrices)
console.log(fullPrice)
console.log(getTitle())
console.log(servicePercentPrice(fullPrice, percentPrice))
console.log(getRollbackMessage(fullPrice))
showTypeOf(title)
showTypeOf(fullPrice)
//showTypeOf(adaptive)

