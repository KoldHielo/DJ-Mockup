const decksImgTwo = document.querySelector('#decks-img-two');

const scrollFunc = () => {
    const viewportBottom = window.scrollY + window.innerHeight;
    decksImgTwoPosition = decksImgTwo.getBoundingClientRect().top + window.scrollY + 60;

    if(viewportBottom > decksImgTwoPosition) {
        decksImgTwo.style.animation = 'scan 1 2s linear';
    }
}

window.addEventListener('scroll', scrollFunc);