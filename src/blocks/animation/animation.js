
import { cloudAnimation } from '../../js/util/cloud-animation.js';

export default function animation() {

  console.log('animation.js');

  const WORD_DELAY = 50;

  let isChatAnimate = true;

  const about = document.querySelector(`.about`);

  const chatMessages = document.querySelectorAll(`.chat__item`);

  const cta = document.querySelector(`.cta`);

  const consultation = document.querySelector(`.consultation`);


  function getCoords(elem) { // кроме IE8-
    const box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }

  /**
   * Автоматический набор текста
    txt : блок с текстом
    word : текст из дата атрибута
    wordArray : разбивает строку текста на отдельные буквы и записывает в массив
   *
   */
  const writeText = (txt) => {
    const word = txt.getAttribute(`data-word`);
    const wordArray = word.split('')

    for (let i = 0; i < wordArray.length; i++) {
      setTimeout(() => {
        txt.innerHTML = txt.innerHTML + wordArray[i];
      }, WORD_DELAY * i)
    }
  }

  // Получает массив задержек, за сколько отрисовывается КАЖДЫЙ текст в блоке по отдельности, задержку от нулевого индекса приравниваем к 0
  const getTimeArray = () => {
    const timer = [0];

    chatMessages.forEach((item) => {
      // Находит длину каждого текста и умножает на задержку между буквами
      const time = item.querySelector(`.chat__text`).getAttribute(`data-word`).length * WORD_DELAY;
      // Пушит новое значение в массив
      timer.push(time);
    })

    return timer;
  }


  function animateChat() {
    // Массив временных промежутков, за каждый из которых текст полностью печатается в определенном блоке
    const timerArray = getTimeArray();

    // Объявляем переменную задержки времени между блоками
    let time;

    chatMessages.forEach((item, index) => {
      const text = item.querySelector(`.chat__text`);
      // const time = text.getAttribute(`data-time`);

      // Переопределяем задержку времени для кажого блока в зависимости от итерации
      timerArray[index] == 0 ? time = 0 : time = time + timerArray[index] + 1100;

      // Отрисовываем текст
      setTimeout(() => {
        // Отображаем блок
        item.classList.add(`chat__item--active`);

        setTimeout(() => {
          writeText(text)
        }, 300)
      }, time)
    });
    isChatAnimate = false;
  }




  const deliveryNumbers = document.querySelectorAll(`.page-info__number`)



  window.addEventListener(`scroll`, () => {
    if (about) {
      if (window.pageYOffset >= (getCoords(about).top - 150)) {
        if (isChatAnimate) {
          animateChat();
        }
      }
    }

    if (cta) {
      if (window.pageYOffset >= (getCoords(cta).top - 150)) {
        cta.classList.add(`cta--active`);
      }
    }

    if (consultation) {
      if (window.pageYOffset >= (getCoords(consultation).top - 150)) {
        consultation.classList.add(`consultation--active`);
      }
    }

    if (deliveryNumbers) {
      deliveryNumbers.forEach(it => {
        if (window.pageYOffset >= (getCoords(it).top - 500)) {
          it.classList.add(`page-info__number--active`)
        }
      })
    }
  })

  // Анимация облаков ****************************************************
  const wordsWrappers = document.querySelectorAll(`.page-info__item--img`);

  if (wordsWrappers) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      wordsWrappers.forEach(it => {
        cloudAnimation(it);
      })
    }
  }

}
