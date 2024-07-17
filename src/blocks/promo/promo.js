export default function promo() {

  const infinity = document.querySelector('.promo__accent b');

  if (infinity) {
    console.log('promo.js');

    function addInfinity() {
      for (let i = 2; i <= 200; i++) {

        setTimeout(() => {
          if (i === 200) {
            infinity.innerHTML = '∞'
            infinity.parentNode.classList.add('promo__accent--big')
          } else {
            infinity.innerHTML = i;
          }
        }, i * 17)
      }
    }

    addInfinity()
  }




}
