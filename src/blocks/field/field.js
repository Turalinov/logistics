
import IMask from 'imask';

export default function field() {
  const inputs = document.querySelectorAll('.field__input');

  if (inputs) {
    console.log('field.js')

    const phones = document.querySelectorAll(`.field__input--phone`);
    const textareas = document.querySelectorAll('.field__textarea');

    const phoneOption = {
      mask: '{+7} (000) 000-00-00',
      lazy: true
    }

    function fixTextareaSize(textarea) {
      textarea.style.height = textarea.scrollHeight + 2 + "px"
    }

    textareas.forEach((item) => {
      item.addEventListener('input', function (e) {
        fixTextareaSize(e.target)
      })
      fixTextareaSize(item)
    })

    // Инициализация маски для телефона
    phones.forEach((item) => {
      const mask = IMask(item, phoneOption);

      item.addEventListener('focus', function () {
        // если true - то подсказка при фокусе не появляется, если false подсказка появляется сразу
        mask.updateOptions({ lazy: false });
      }, true);

      item.addEventListener('blur', function () {
        mask.updateOptions({ lazy: true });

        if (!mask.masked.rawInputValue) {
          mask.value = '';
          item.parentNode.classList.remove('field--no-empty');
        }
      }, true);
    });


    inputs.forEach((item) => {
      item.addEventListener('input', () => {
        if (item.value.length > 0) {
          item.parentNode.classList.add('field--no-empty');
        } else {
          item.parentNode.classList.remove('field--no-empty');
        }
      })
    })
  }


}
