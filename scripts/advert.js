(() => {
  const advBlock = document.querySelector('.adv');
  const stickyBlock = document.querySelector('.sticky');
  const header = document.querySelector('.header');
  let last_scroll = 0;

  window.addEventListener('scroll', () => {
    const check = document.querySelector('.hero__compatible-wrap');
    let checkCoord = check.getBoundingClientRect();
    let coordinates = advBlock.getBoundingClientRect();

    if (coordinates.top < 0 && document.documentElement.clientWidth > 822) {
      advBlock.classList.add('fixed');
    };
    if (checkCoord.top > 0 && document.documentElement.clientWidth > 822) {
      advBlock.classList.remove('fixed');
    };
    if (coordinates.top < 0 && document.documentElement.clientWidth <= 822) {
      window.addEventListener('scroll', showSticky);
      showHeader();
    };
  });

  stickyBlock.addEventListener('click', () => {
    advBlock.classList.add('fixed', 'fixed-mobile')
  });

  let visible = function (target) {
    let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    };
    let windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) {
      return true;
    } else {
      return false;
    };
  };

  function showSticky() {
    if (!visible(advBlock)) {
      stickyBlock.classList.remove('hide');
      window.removeEventListener('scroll', showSticky);
    } else {
      stickyBlock.classList.add('hide');
    };
  };

  function showHeader() {
    if(window.scrollY > last_scroll){
      if(header.classList.contains('header-fixed')) header.classList.remove('header-fixed');
    }else{
      header.classList.add('header-fixed');
    }
    last_scroll = window.scrollY;
  }

  document.addEventListener('click', (e) => {
    const withinSticky = e.composedPath().includes(stickyBlock);
    const withinAdv = e.composedPath().includes(advBlock);

    if (advBlock.classList.contains('fixed-mobile') && !withinSticky && !withinAdv) {
      advBlock.classList.remove('fixed-mobile', 'fixed')
    };
  });

})();
