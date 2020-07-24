



//Books array displayed as a list on the page

/*
** wrapped in function that allows for the page content to be loaded before trying to read it. 
*/
window.onload = function() {

//Creates a Library object

let library = new Library();






//Add button adds book to the Library's books array
//Targets the input fields and add them into books array

 
	const addButton = document.getElementById('add');
	addButton.addEventListener('click', () => {
		let title = document.getElementById('title').value;
		let author = document.getElementById('author').value;
		library.addBook(new Book(title, author));
		console.log(library);		
		
		let list = library.printList(library);
		console.log(list);	
		let ul = document.getElementById('list');
		console.log(ul);
		ul.appendChild(list);
		
		
		
	});

}




