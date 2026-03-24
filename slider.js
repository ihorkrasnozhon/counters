const buttons = document.querySelectorAll('.carousel-button');
function nextSlide(offset) {
    const slidesContainer = document.querySelector('ul');
    const activeSlide = slidesContainer.querySelector('.active');
    const slides = Array.from(slidesContainer.children);

    let newIndex = slides.indexOf(activeSlide)+offset;
    if(newIndex<0) {
        newIndex = slides.length -1;
    } else if(newIndex >= slides.length) {
        newIndex = 0;
    }


    slides[newIndex].classList.add('active');
    activeSlide.classList.remove('active');

}
let interval = setInterval(() => nextSlide(1), 3000);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(interval);
        button.dataset.carouselButton === 'next' ? nextSlide(1) : nextSlide(-1);
        interval = setInterval(() => nextSlide(1), 3000);
    });
});




let startX = 0;
let endX = 0;
document.querySelector('ul').addEventListener("pointerdown", handleStart);
document.querySelector('ul').addEventListener("pointerup", handleEnd);

function handleStart(event) {
    startX = event.clientX;
}
function handleEnd(event) {
    endX = event.clientX;

    const diff = startX - endX;
    if(Math.abs(diff) > 50) {
        clearInterval(interval);
        if(endX>startX) {
            nextSlide(-1);
        } else if (endX<startX) {
            nextSlide(1);
        }
        interval = setInterval(() => nextSlide(1), 3000);
    }

}
