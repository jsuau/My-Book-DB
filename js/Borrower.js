class Borrower {
    constructor(name){
        this.name = name;
        this.currentBook = null;
    }
  
    checkOut(book){
        this.currentBook = book;
        book.out = true;
        book.borrower = this;
    }
    
    returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.borrower = null;
    }
}
