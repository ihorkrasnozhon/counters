function CounterPrototype(element) {
    this.root = element;
    this.resultElement = this.root.querySelector('[data-counter="result"]');
    this.score = parseFloat(this.resultElement.innerText);

    document.addEventListener('click', this.init.bind(this));
}

CounterPrototype.prototype.init = function (element) {
    const button = element.target.closest('.button');
    if (!button || !this.root.contains(button)) return 0;
    this.update(button.dataset.counter);
}

CounterPrototype.prototype.update = function(action) {
    if (action==='increment' || action==='decrement') {
        action==='increment' ? this.score+=this.step : this.score-=this.step;
        this.resultElement.innerText = this.score;
    }
}

const allCounters = document.querySelectorAll('[data-counter="container"]');
allCounters.forEach(element => {
    new CounterPrototype(element);
});



