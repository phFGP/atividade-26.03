class NumberCollection {
    constructor(numbers) {
        this.numbers = numbers;
    }

    createIterator() {
        return new NumberIterator(this.numbers);
    }
}
class NumberIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.numbers[this.index++];
        }
        return null;
    }

    hasNext() {
        return this.index < this.numbers.length;
    }
}
const collection = new NumberCollection([10, 20, 30, 40]);
const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next()); // 10, 20, 30, 40
}
