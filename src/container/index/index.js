import {
  createElement,
  createHeader,
  createCardList,
} from '../../script/layout'

const body = document.querySelector('body')

const mainEl = createElement('main', 'main')

body.prepend(mainEl)

const main = document.querySelector('.main')

const header = createHeader()

main.append(header)
main.append(createElement('h1', 'title', 'Мій блог'))
main.append(createCardList())
