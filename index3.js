const myLibrary = [];
const libraryTable = document.getElementById('table-library');
let bookIndex = 0;

//hard-coded books
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
addBookToLibrary("Praslea", "P. Ispirescu", 50, "read");
addBookToLibrary("Ibrahimovich", "P. Mattew", 267, "read");

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

function displayLibrary(){
    for(let book of myLibrary){
        const newRow = document.createElement('tr');
        libraryTable.appendChild(newRow);
        newRow.classList.add("row" + bookIndex.toString());
    
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

        const buttonDeleteBook = document.createElement('button');
        buttonDeleteBook.textContent = "Delete";
        buttonDeleteBook.classList.add('button-delete-book');
        //buttonDeleteBook.id = 'btnDeleteBook' + bookIndex.toString();
        buttonDeleteBook.addEventListener('click', ()=>{
            const row = buttonDeleteBook.parentElement;
            libraryTable.removeChild(row);
        })

        newRow.appendChild(buttonDeleteBook);

        bookIndex++;
    }
}

displayLibrary();

const dialog = document.getElementById('dialog-new-book');
const newBookButton = document.getElementById('new-book-button');
const cancelButton = document.getElementById('dialog-cancel');
const btnAddBook = document.getElementById('dialog-add-book');

newBookButton.addEventListener('click', () =>{
    dialog.showModal();
})

cancelButton.addEventListener('click', ()=>{
    dialog.close();
})

btnAddBook.addEventListener('click', ()=>{
    const newRow = document.createElement('tr');
    //libraryTable.appendChild(newRow);
    let validatedData = 1;

    const dataTitle = document.createElement('td');
    const inputTitle = document.getElementById('input-title');
    if(inputTitle.value.length < 100 && inputTitle.value.length > 1){
        dataTitle.textContent = inputTitle.value;
        //newRow.appendChild(dataTitle);
    }else{
        validatedData = 0;
        alert("The name of the book must have between 1 and 100 characters!")
    }
    

    const dataAuthor = document.createElement('td');
    const inputAuthor = document.getElementById('input-author');
    if(inputAuthor.value.length < 50 && inputAuthor.value.length > 0){
        dataAuthor.textContent = inputAuthor.value;
        // newRow.appendChild(dataAuthor);  
    }else{
        validatedData = 0;
        alert("The name of the author must have between 1-50 characters!")
    }

    const dataPages = document.createElement('td');
    const inputPages = document.getElementById('input-pages');
    if(inputPages.value < 1){
        validatedData = 0;
        alert("Number of pages must be positive!")
    }else{
        dataPages.textContent = inputPages.value;
        // newRow.appendChild(dataPages); 
    }
    

    const dataRead = document.createElement('td');
    const optionSelected = document.getElementById('select-is-read')
    dataRead.textContent = optionSelected.value;
    // newRow.appendChild(dataRead);

    if(validatedData == 1){ 
        newRow.appendChild(dataTitle);
        newRow.appendChild(dataAuthor);
        newRow.appendChild(dataPages); 
        newRow.appendChild(dataRead);

        newRow.classList.add("row" + bookIndex.toString());
        libraryTable.appendChild(newRow);

        addBookToLibrary(inputTitle.value, inputAuthor.value, 
            inputPages.value, optionSelected.value);

        const buttonDeleteBook = document.createElement('button');
        buttonDeleteBook.textContent = "Delete";
        buttonDeleteBook.classList.add('button-delete-book');
        //buttonDeleteBook.id = 'btnDeleteBook' + bookIndex.toString();
        buttonDeleteBook.addEventListener('click', ()=>{
            const row = buttonDeleteBook.parentElement;
            libraryTable.removeChild(row);
        });

        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        dialog.close();
        
        //micut test
        // for(book of myLibrary){
        //     console.log(book.title);
        // }
        
    }
})





