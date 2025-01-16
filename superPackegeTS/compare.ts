interface Comparable {
    compareTo(other: Comparable): number;
}


export class Person implements Comparable {
    constructor(public name: string, public age: number) { }
    compareTo(other: Comparable): number {
        if (this.age < other.age) {
            return -1;
        }
        if (this.age > other.age) {
            return 1;
        }
        return 0;
    }
}