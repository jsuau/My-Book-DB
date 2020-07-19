class Library {
    constructor(){
        this.books = [];
        this.borrowers = [];
    }
  
    addBook(book) {
        this.books.push(book);
    }
	
	removeBook() {
		this.books.pop();
		
	}
    
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }
	
	removeBook() {
		this.borrowers.pop();
		
	}
	
}



