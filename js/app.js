



//Books array displayed as a list on the page

/*
** wrapped in function that allows for the page content to be loaded before trying to read it. 
*/
window.onload = function() {


//Add button adds book to the Library's books array
 
	const addButton = document.getElementById('add');
	addButton.addEventListener('click', () => {
		console.log(addButton);
	});

}




function printList(library) {
let html = '';
for (let i = 0; i < library.books.length; i+= 1) {
	html += '<li>';
	html += library.books[i].title + ', ' + library.books[i].author + '</li>';
}
return html;
}