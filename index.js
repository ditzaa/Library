let myLibrary = [];
const mainDiv = document.getElementById('main-div');
const btnNewBook = document.getElementById('new-book-button');
const dialogNewBook = document.getElementById('dialog-new-book');
const newBookButton = document.getElementById('new-book-button');
const cancelButton = document.getElementById('dialog-cancel');
const btnAddBook = document.getElementById('dialog-add-book');
let bookIndex = 0;
let deletedElements = 0;
let indexNode = 0;

//hard-coded books
addBookToLibrary("Hungary", "Budapest", 295, "not read yet");
addBookToLibrary("Bulgaria", "Sofia", 50, "read");
addBookToLibrary("Spain", "Madrid", 267, "read");
addBookToLibrary("Portugal", "Lisbon", 267, "read");
addBookToLibrary("Moldova", "Lala", 267, "read");
addBookToLibrary("Romania", "Bucharest", 267, "read");
addBookToLibrary("China", "Beijing", 267, "read");
displayLibrary();

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

function countRows(){
    const rowNodes = document.querySelectorAll('.button-delete-book');
    indexNode = 0;
    for(let node of rowNodes){
        node.id = indexNode;
        indexNode++;
    }
}

function displayLibrary() {
    const tableToRemove = document.getElementById('table-library');
    if(tableToRemove != null)
        tableToRemove.remove();

    createTable();

    const libraryTable = document.getElementById('table-library');

    for(let book of myLibrary){
        const newRow = document.createElement('tr');
        newRow.id = "row" + bookIndex.toString();

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

        const btnDeleteBook = document.createElement('button');
        btnDeleteBook.textContent = "Delete";
        btnDeleteBook.classList.add('button-delete-book');
        //let bookIndex1 = bookIndex;
        //btnDeleteBook.id = bookIndex.toString();

        btnDeleteBook.addEventListener('click', ()=>{
            countRows();
            const row = btnDeleteBook.parentElement;
            const indexToDelete = btnDeleteBook.id;
            myLibrary.splice(btnDeleteBook.id, 1);
            libraryTable.removeChild(row);
    
            console.log(indexToDelete);
            console.log(myLibrary);

        });
        bookIndex++;

        newRow.appendChild(btnDeleteBook);
        libraryTable.appendChild(newRow);
        countRows();
    }
}

function createTable(){
    const tableLibrary = document.createElement('table');
    tableLibrary.id = 'table-library'
    const rowHeader = document.createElement('tr');

    const headerTitle = document.createElement('th');
    headerTitle.textContent = 'Title';
    rowHeader.appendChild(headerTitle);

    const headerAuthor = document.createElement('th');
    headerAuthor.textContent = 'Author';
    rowHeader.appendChild(headerAuthor);

    const headerPages = document.createElement('th');
    headerPages.textContent = 'Pages';
    rowHeader.appendChild(headerPages);

    const headerRead = document.createElement('th');
    headerRead.textContent = 'Read';
    rowHeader.appendChild(headerRead);

    tableLibrary.appendChild(rowHeader);
    mainDiv.appendChild(tableLibrary);
}

btnNewBook.addEventListener('click', ()=>{
    dialogNewBook.showModal();
})

cancelButton.addEventListener('click', ()=>{
    dialogNewBook.close();
})

btnAddBook.addEventListener('click', ()=>{
    let validatedData = 1;
    let title;
    let author;
    let pages;
    let option;

    const inputTitle = document.getElementById('input-title');
    if(inputTitle.value.length < 100 && inputTitle.value.length > 1){
        title = inputTitle.value;
    }else{
        validatedData = 0;
        alert("The name of the book must have between 1 and 100 characters!")
    }

    const inputAuthor = document.getElementById('input-author');
    if(inputAuthor.value.length < 50 && inputAuthor.value.length > 0){
        author = inputAuthor.value;
    }else{
        validatedData = 0;
        alert("The name of the author must have between 1-50 characters!")
    }

    const inputPages = document.getElementById('input-pages');
    if(inputPages.value < 1){
        validatedData = 0;
        alert("Number of pages must be positive!")
    }else{
        pages = inputPages.value; 
    }

    const optionSelected = document.getElementById('select-is-read')
    option = optionSelected.value;

    if(validatedData == 1){
        addBookToLibrary(title, author, pages, option);
        displayLibrary();

        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        //deletedElements--;
        const rowNodes = document.querySelectorAll('.button-delete-book');
        
        countRows();

        dialogNewBook.close();
    }
})





