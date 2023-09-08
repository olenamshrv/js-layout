// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/hometask', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('hometask', {
    // вказуємо назву контейнера
    name: 'hometask',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Коммьюніті',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {
      tabs: [
        {
          id: 1,
          name: 'База знань',
          isActive: false,
        },
        {
          id: 2,
          name: 'Інформація',
          isActive: true,
          info: {
            title: 'Що таке база знань?',
            text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
          },
          button: {
            text: "Перейти до ком'юніті у Телеграм",
          },
        },
      ],
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// Експортуємо глобальний роутер
module.exports = router