(() => {
  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let advBlock = document.querySelector('.adv');

    selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
      if (advBlock.classList.contains('fixed-mobile')) {
        let selectBody = document.querySelector('.adv__sel-body');
        selectBody.classList.toggle('select-mobile');
      };
    }

    function selectChoose() {
      let text = this.innerHTML;
      let select = this.closest('.select');
      let currentText = select.querySelector('.select__current');
      if (!this.classList.contains('adv__sel-item')) currentText.innerHTML = text;
      let currentPrice = currentText.querySelector('.select__price');
      if (currentPrice != undefined) currentPrice.classList.add('hide');
      select.classList.remove('is-active');



      if (this.classList.contains('header__sel-item')) {
        let prices = document.querySelectorAll('.price')
        prices.forEach(price => {
          if (this.innerHTML === 'USA') {
            price.textContent = '$' + price.innerHTML.slice(1);
          } else if (this.innerHTML === 'RUS') {
            price.textContent = '₽' + price.innerHTML.slice(1);
          } else {
            price.textContent = '£' + price.innerHTML.slice(1);
          }
        })
      }

    }

  };

  select();

})();

