class Counter {
    counterValue: number;

    //Initializing the counter Value with the initial value
    constructor(initialValue: number) {
        this.counterValue = initialValue;
    }

    incCounterValue = (): void => {
        this.counterValue += 1;
    };

    currentCounterValue = (): number => {
        return this.counterValue;
    };
}

function counter(initialValue: number = 0) {
    let setCounter = new Counter(initialValue);
    return [setCounter.currentCounterValue, setCounter.incCounterValue];
}

const [getA, nextA] = counter(1);
console.log(getA()); // 1
nextA();

console.log(getA()); //2
const [getB, nextB] = counter(10);
nextB();
console.log(getA()); //2
console.log(getB()); //11
nextA();

console.log(getA()); //3
console.log(getB()); //11
