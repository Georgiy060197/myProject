const title = "myProject"
const screens = "Простые, Сложные, Интерактивные"
const screenPrice = 13
const rollback = 30
const fullPrice = 1000
const adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов")
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов")
console.log(screens.toLowerCase())
console.log(fullPrice * (rollback / 100))