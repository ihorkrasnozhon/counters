function Counter(element, options={}) {
    this.root = element;
    this.resultElement = this.root.querySelector('[data-counter="result"]');
    this.score = parseFloat(this.resultElement.innerText);

    const {
        step = 1,
        min = -Infinity,
        max = Infinity
    } = options;

    this.step = step;
    this.min = min;
    this.max = max;

    this.root.addEventListener('click', this.handleClick.bind(this));

}

Counter.init = function (target, options) {
    let allCounters;

    if(typeof target === 'string'){
        allCounters = document.querySelectorAll(target);
    } else if (target instanceof HTMLElement) {
        allCounters = [target];
    } else if (target instanceof NodeList) {
        allCounters = target;
}
    allCounters.forEach(element => {
        new Counter(element, options);
    });
}

Counter.prototype.handleClick = function (element) {
    const button = element.target.closest('.button');
    if (!button || !this.root.contains(button)) return 0;
    this.update(button.dataset.counter);
}

Counter.prototype.update = function(action) {
        if(action==='increment' && this.score+this.step<this.max) {
            this.score+=this.step;
        } else if (action==='decrement' && this.score-this.step>this.min) {
            this.score-=this.step
        }
        this.resultElement.innerText = this.score;
}


Counter.init('[data-counter="container"]');

