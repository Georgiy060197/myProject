const title = prompt("Как называется Ваш проект?")
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")
const screenPrice = +prompt("Сколько будет стоить данная работа?")
const rollback = 30.5
const serviceQuestion1 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice1 = +prompt("Сколько это будет стоить?")
const serviceQuestion2 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice2 = +prompt("Сколько это будет стоить?")

const fullPrice = screenPrice + servicePrice1 + servicePrice2
const adaptive = confirm("Нужен ли адаптив на сайте?", "Да, нет")
let servicePercentPrice = fullPrice * (rollback / 100)
console.log(servicePercentPrice)
console.log(Math.ceil(servicePercentPrice))

/*console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов")
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов")
console.log(screens.toLowerCase())
console.log(fullPrice * (rollback / 100))*/


switch (true) {
    case fullPrice > 30000:
        console.log("Даем скидку в 10%");
        break
    case fullPrice > 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break
    case fullPrice > 0 && fullPrice < 15000:
        console.log("Скидка не предусмотрена");
        break
    case fullPrice < 0:
        console.log("Что то пошло не так");
        break
}