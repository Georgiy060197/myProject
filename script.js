const allBooks = document.querySelectorAll('.book')
const chengeImage = document.querySelector('body')
const banner = document.querySelector('.adv')
const item = document.querySelectorAll('h2')
const newList = document.createElement('li')

allBooks[0].insertAdjacentElement('beforebegin', allBooks[1])
allBooks[2].insertAdjacentElement('beforebegin', allBooks[4])
allBooks[2].insertAdjacentElement('beforebegin', allBooks[3])
allBooks[2].insertAdjacentElement('beforebegin', allBooks[5])

chengeImage.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"
banner.remove()

allBooks[4].children[0].firstElementChild.textContent = "Книга 3. this и Прототипы Объектов"


newList.textContent = 'Глава 8: За пределами ES6'
allBooks[2].children[1].append(newList)
allBooks[2].children[1].children[8].after(allBooks[2].children[1].children[10])

allBooks[0].children[1].children[3].after(allBooks[0].children[1].children[6])
allBooks[0].children[1].children[4].after(allBooks[0].children[1].children[8])
allBooks[0].children[1].children[9].after(allBooks[0].children[1].children[2])

allBooks[5].children[1].children[1].after(allBooks[5].children[1].children[9])
allBooks[5].children[1].children[2].after(allBooks[5].children[1].children[4])
allBooks[5].children[1].children[4].before(allBooks[5].children[1].children[5])
allBooks[5].children[1].children[9].before(allBooks[5].children[1].children[6])

console.log(allBooks)
