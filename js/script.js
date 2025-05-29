'use strict'

const name = document.getElementsByTagName('h1')
const button = document.getElementsByClassName('handler_btn')
const plus = document.querySelector('.screen-btn')
const otherItemPercent = document.querySelectorAll('.other-items.percent')
const otherItemNuber = document.querySelectorAll('.other-items.number')
const rollbackInput = document.querySelector('.rollback input')
const span = document.querySelector('.rollback span')
const totalInput = document.getElementsByClassName('total-input')
let allScreens = document.querySelectorAll('.screen')

const appData = {
    rollback: 0,
    title: "",
    screens: [],
    screenPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addtitle()
        rollbackInput.addEventListener('input', appData.chengePercent)

        button[0].addEventListener('click', function () {
            if (appData.checkValueBlock()) {
                appData.start()
            }

        }),


            plus.addEventListener('click', appData.addScreensBlock)

    },
    addtitle: function () {
        document.title = name[0].textContent
    },
    showResult: function () {
        totalInput[0].value = appData.screenPrice
        totalInput[2].value = appData.servicePercentPrice + appData.servicePricesNumber
        totalInput[3].value = appData.fullPrice

    },
    addScreens: function () {
        allScreens = document.querySelectorAll('.screen')
        allScreens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
        console.log(appData.screens)
    },

    addServices: function () {
        otherItemPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemNuber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreensBlock: function () {
        const cloneScreen = allScreens[0].cloneNode(true)
        allScreens[allScreens.length - 1].after(cloneScreen)
    },
    chengePercent: function (e) {
        span.textContent = e.target.value
        appData.rollback = +span.textContent
    },
    getAllServicePrices: function () {
        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return sum + item.price
        }, 0)
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
        totalInput[4].value = appData.fullPrice - appData.servicePricesPercent
        totalInput[1].value = appData.screens.reduce(function (sum, item) {
            return sum + item.count
        }, 0)
    },
    checkValueBlock: function () {
        allScreens = document.querySelectorAll('.screen')
        let checkRezult = true
        allScreens.forEach(function (screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            // const selectValue = select.options[select.selectedIndex].value
            //const inputValue = input.value
            if (select.value.length == 0 || input.value.length == 0) {
                checkRezult = false
                return
            }
        })
        return checkRezult
    },

    // getServicePercentPrices: function (price, callBack) {
    //     appData.servicePercentPrice = price - callBack()
    // },
    // percentPrice: function () {
    //     return appData.fullPrice * (appData.rollback / 100)
    // },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.getAllServicePrices()
        // appData.getServicePercentPrices(appData.fullPrice, appData.percentPrice)
        // appData.logger()
        console.log(appData)
        appData.showResult()
    },
    logger: function () {
        for (let key in appData) {
            console.log("Знаяение метода -" + " " + key + " " + "=" + " " + appData[key])
        }
    }
}
appData.init()