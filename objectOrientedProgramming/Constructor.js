
// class Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }


class Book {
    constructor(title=String, author=String, year=String) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

var book = new Book('Clean Code', 'Robert', '2011');

Book.prototype.getSummary = function myFucntion() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}