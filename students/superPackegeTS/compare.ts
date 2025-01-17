interface Comparable<T> {
    compareTo(other: T): number
}

export class Myobject implements Comparable<Myobject> {
    age: number;
    compareTo(other: Myobject): number {
        if (this.age === other.age) {
            return 0;
        }
        return this.age > other.age ? 1 : -1;
    }

};