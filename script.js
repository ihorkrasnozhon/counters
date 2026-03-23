
let counters = document.querySelectorAll('.counter__body');

counters.forEach((counter) =>
{
    const incButton = counter.querySelector('.increment');
    const decButton = counter.querySelector('.decrement');


    incButton.addEventListener('click', increment);
    decButton.addEventListener('click', decrement);


    let count = 1;

    function updateCount() {
        counter.querySelector('.result').innerHTML = count;
    }

    function increment() {
        count++;
        updateCount();
        return 0;
    }

    function decrement() {
        count--;
        updateCount();
        return 0;
    }
});
