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
    screens: [],
    screenPrice: 0,
    serviceQuestion1: "",
    //servicePrice1: 0,
    serviceQuestion2: "",
    //servicePrice2: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    fullPrice: 0,
    services: {},
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function () {
        appData.title = prompt("Как называется Ваш проект?", "Hello")
        // appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
        // do {
        //     appData.screenPrice = prompt("Сколько будет стоить данная работа?")
        // }
        // while (!appData.isNumber(appData.screenPrice))
        // appData.screenPrice = Number(appData.screenPrice)

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
            let price = 0
            do {
                price = prompt("Сколько будет стоить данная работа?")
            }
            while (!appData.isNumber(price))
            appData.screens.push({ id: i, name: name, price: +price })
        }

        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + item.price
        }, 0)

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?")
            let price = 0
            do {
                price = prompt("Сколько это будет стоить?")
            }

            while (!appData.isNumber(price))
            appData.services[name] = +price
        }
    },

    //         appData.serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?")
    //         do {
    //             appData.servicePrice1 = prompt("Сколько это будет стоить?")
    //         }
    //         while (!appData.isNumber(appData.servicePrice1))
    //         appData.servicePrice1 = Number(appData.servicePrice1)
    //         appData.serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?")
    //         do {
    //             appData.servicePrice2 = prompt("Сколько это будет стоить?")
    //         }
    //         while (!appData.isNumber(appData.servicePrice2))
    //         appData.servicePrice2 = Number(appData.servicePrice2)
    //     },

    getAllServicePrices: function () {
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
        //appData.allServicePrices = appData.servicePrice1 + appData.servicePrice2
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
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
        appData.servicePercentPrice = price - callBack()
    },
    percentPrice: function () {
        return appData.fullPrice * (appData.rollback / 100)
    },
    start: function () {
        appData.asking()
        appData.getAllServicePrices()
        appData.getFullPrice()
        appData.getServicePercentPrices(appData.fullPrice, appData.percentPrice)
        appData.getTitle()
        appData.getRollbackMessage(appData.fullPrice)
        console.log(appData.screens)
        console.log(appData.screenPrice)
        //         console.log(appData.allServicePrices)
        //         console.log(appData.fullPrice)
        //         console.log(appData.getTitle())
        //         console.log(appData.servicePercentPrice)
        //         appData.getRollbackMessage(appData.fullPrice)
        appData.logger()
    },
    logger: function () {
        for (let key in appData) {
            console.log("Знаяение метода -" + " " + key + " " + "=" + " " + appData[key])
        }
    }
}
appData.start()