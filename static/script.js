const decksImgTwo = document.querySelector('#decks-img-two');
const menuButton = document.querySelector('#menu-button');
const menuButtonBars = menuButton.querySelectorAll('.bar');
const menuAnchors = document.querySelectorAll('#menu a');
const menu = document.querySelector('#menu');

const scrollFunc = () => {
    const viewportBottom = window.scrollY + window.innerHeight;
    decksImgTwoPosition = decksImgTwo.getBoundingClientRect().top + window.scrollY + 60;

    if(viewportBottom > decksImgTwoPosition) {
        decksImgTwo.style.animation = 'scan 1 2s linear';
    }
}

const menuClickFunc = () => {
    if(menu.hasAttribute('style')) {
        menu.removeAttribute('style');
    }

    else {
        menu.style.opacity = 1;
        menu.style.top = 0
    }
}


menuAnchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      menu.removeAttribute('style');
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({
        top: targetPosition,
        left: 0,
        behavior: 'smooth'
      });
    })
  })

window.addEventListener('scroll', scrollFunc);
menuButton.addEventListener('click', menuClickFunc);