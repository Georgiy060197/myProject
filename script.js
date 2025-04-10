const renge = document.querySelector('#range')
const rengeSpan = document.querySelector('#range-span')
const circle = document.querySelector('#circle')
const controlButton = document.querySelector('#btn')
const square1 = document.querySelector('#square')
const inputText = document.querySelector('#text')
const buttonInFigurs = document.querySelector('#e_btn')

const chengeColor = function () {
    square1.style.backgroundColor = color
}
const colorText = function (e) {
    return color = e.target.value
}
inputText.addEventListener('input', colorText)
controlButton.addEventListener('click', chengeColor)

buttonInFigurs.style.display = 'none'

renge.addEventListener('input', function (e) {
    rengeSpan.textContent = e.target.value
    circle.style.height = e.target.value + '%'
    circle.style.width = e.target.value + '%'
})




