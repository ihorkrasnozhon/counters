function counter () {
    document.addEventListener('click', function (event) {
            const button = event.target.closest('.button');
            if (!button) return 0;
            const action = button.dataset.counter;

            if (action==='increment' || action==='decrement') {
                const counter = button.closest('[data-counter="container"]');
                const resultElement = counter.querySelector('[data-counter="result"]');

                let score = parseFloat(resultElement.innerText);

                action==='increment' ? score++ : score--;
                resultElement.innerText = score;
            }


    })
}
counter();



