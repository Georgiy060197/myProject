let title = "myProject"
let screens = "Простые, Сложные, Интерактивные"
const screenPrice = 13
const rollback = 30
let fullPrice = 1000
const adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "рублей/ долларов/гривен/юани")
console.log(screens.toLowerCase())
console.log(fullPrice * (rollback / 100))