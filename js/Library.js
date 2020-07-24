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
	
	removeBorrower() {
		this.borrowers.pop();
		
	}
	
	/**
	* Creates li elements to add to DOM's ul.
	*/
	
	printList(library) {
		let html = document.createElement('LI');
		for (let i = 0; i < this.books.length; i+= 1) {
			html.innerHTML = this.books[i].title + ', ' + this.books[i].author;
			
			}
			return html;
	}
	
}



