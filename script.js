'use strict'
// const rollback = 30.5
// let title
// let screens
// let screenPrice
// let serviceQuestion1
// let servicePrice1
// let serviceQuestion2
// let servicePrice2
//const adaptive = confirm("Нужен ли адаптив на сайте?", "Да, нет")
const appData = {
    rollback: 30.5,
    title: "",
    screens: "",
    screenPrice: 0,
    serviceQuestion1: "",
    servicePrice1: 0,
    serviceQuestion2: "",
    servicePrice2: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {

        appData.title = prompt("Как называется Ваш проект?", "Hello")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?")
        }
        while (!appData.isNumber(appData.screenPrice))
        appData.screenPrice = Number(appData.screenPrice)

        appData.serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?")
        do {
            appData.servicePrice1 = prompt("Сколько это будет стоить?")
        }
        while (!appData.isNumber(appData.servicePrice1))
        appData.servicePrice1 = Number(appData.servicePrice1)

        appData.serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?")
        do {
            appData.servicePrice2 = prompt("Сколько это будет стоить?")
        }
        while (!appData.isNumber(appData.servicePrice2))
        appData.servicePrice2 = Number(appData.servicePrice2)
    },
    getAllServicePrices: function () {
        return appData.servicePrice1 + appData.servicePrice2
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.getAllServicePrices()
    },
    getTitle: function () {
        return appData.title.trim().charAt(0).toUpperCase() + appData.title.slice(1).toLowerCase()
    },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable)
    },
    getRollbackMessage: function (price) {
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
    },
    getServicePercentPrices: function (price, callBack) {
        return price - callBack()
    },
    percentPrice: function () {
        return appData.fullPrice * (appData.rollback / 100)
    },
    start: function () {

        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.percentPrice)
        console.log(appData.allServicePrices)
        console.log(appData.fullPrice)
        console.log(appData.getTitle())
        console.log(appData.servicePercentPrice)
        appData.getRollbackMessage(appData.fullPrice)
        appData.logger()
    },
    logger: function () {
        for (let key in appData) {
            console.log("Знаяение метода -" + " " + key + " " + "=" + " " + appData[key])
        }
    }
}
appData.start()