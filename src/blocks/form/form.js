import { PopupThanks } from "../../blocks/popup/popup.js";

export default function form() {



  const forms = document.querySelectorAll(`form`);

  if (forms && forms.length > 0) {
    console.log('form.js');

    const popupThanks = document.querySelector(`.popup--thanks`);


    //валидация
    const formValidate = (form) => {
      const fields = form.elements;
      //первичный флаг проверки установлен в true
      let result = true;

      const phoneRegular = /^\d+$/;


      [].forEach.call(fields, (el) => {

        const parent = el.parentElement;

        let label = parent.querySelector('label');

        // Переопределяем если у элемента отсутствует label (кнопки управления, кастомные селекты)
        if (!label) {
          // Проверяем элемент на наличие кнопки отправки
          if (parent.classList.contains('offers__controls')) {
            return; // Прерывает только текущую итерацию функции
          }
          // Переопределяем в кастомном селекте
          label = parent.closest('.offers__item').querySelector('label');
        }

        const tel = el.classList.contains('field__input--phone');

        const errorMessage = parent.dataset.message;

        const labelText = label.getAttribute('data-description');

        if (
          //если это поле required и это поле пустое
          (el.required && el.value.length < 1) ||
          // или если это поле телефона и количество строк меньше 18 и телефон не проходит тест ругулярки
          (tel && el.value.length < 18 && !phoneRegular.test(el.value)) ||
          //или если это поле email и это поле пустое или введен один символ и у поле нет @
          (el.inputMode === 'email' && el.value.length >= 1 && el.value.indexOf("@") < 1)
        ) {
          // если поле пустое даем label новое значение
          if (el.value.length < 1) {
            label.innerHTML = 'Поле должно быть заполнено'
          } else {
            label.innerHTML = errorMessage;
          }

          parent.classList.add('field--no-empty')
          parent.classList.add('field--error')

          setTimeout(function () {
            parent.classList.remove('field--error')
            label.innerHTML = labelText;
            if (el.value.length === 0) {
              parent.classList.remove('field--no-empty')
            }
          }, 2000);
          result = false;
        }
      })
      return result;
    };

    //отправка данных
    const postData = async (url, data) => {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      }).then(
        async function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);

            return Promise.reject(new Error(`Looks like there was a problem. Status Code: ${response.status}`));
          }
          console.log('success');
          return await response.json();
        }
      )
    };


    const send = (evt) => {
      evt.preventDefault();
      const { target } = evt;

      const formData = new FormData(target);

      if (formValidate(target)) {

        //обаботка в зависимости от результата отправки
        postData("vendor/action-form.php", formData)
          .then((data) => {
            console.log({ data });
            target.reset();

            //показываем модалку благодарности
            new PopupThanks(popupThanks).openPopup()
          }).catch((err) => {
            console.log(err.message);
            alert(err.message);

            //можем показать модалку с ошибкой
          }).finally(() => {
            //
          });
      } else {
        console.log("error form validate")
      }
    }


    forms.forEach(function (item) {
      if (!item.classList.contains(`offers__form--volume`)) {
        item.addEventListener(`submit`, function (evt) {
          send(evt);
        })
      }
    })

  }
}


