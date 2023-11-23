const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
        return ("" + this.title + " by " + this.author + ", " + this.pages.toString()
         + " pages , " + this.read );
    }
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    return newBook;
}

//hard-coded books
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
addBookToLibrary("Praslea", "P. Ispirescu", 50, "read");
addBookToLibrary("Ibrahimovich", "P. Mattew", 267, "read");

const libraryTable = document.getElementById('libraryTable');

function displayLibrary(){
    for(let book of myLibrary){
        const newRow = document.createElement('tr');
        libraryTable.appendChild(newRow);
    
        const dataTitle = document.createElement('td');
        dataTitle.textContent = book.title;
        newRow.appendChild(dataTitle);
    
        const dataAuthor = document.createElement('td');
        dataAuthor.textContent = book.author;
        newRow.appendChild(dataAuthor);
    
        const dataPages = document.createElement('td');
        dataPages.textContent = book.pages;
        newRow.appendChild(dataPages);
    
        const dataRead = document.createElement('td');
        dataRead.textContent = book.read;
        newRow.appendChild(dataRead);
    }
}

displayLibrary();

const dialog = document.getElementById('new-book-dialog');
const newBookButton = document.getElementById('new-book-button');

newBookButton.addEventListener('click', () =>{
    dialog.showModal();
})




