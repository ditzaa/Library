createTable();
const libraryTable = document.getElementById('table-library');
const newRow = document.createElement('tr');
let validatedData = 1;

const dataTitle = document.createElement('td');
const inputTitle = document.getElementById('input-title');
if(inputTitle.value.length < 100 && inputTitle.value.length > 1){
    dataTitle.textContent = inputTitle.value;
}else{
    validatedData = 0;
    alert("The name of the book must have between 1 and 100 characters!")
}


const dataAuthor = document.createElement('td');
const inputAuthor = document.getElementById('input-author');
if(inputAuthor.value.length < 50 && inputAuthor.value.length > 0){
    dataAuthor.textContent = inputAuthor.value;
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
}

const dataRead = document.createElement('td');
const optionSelected = document.getElementById('select-is-read')
dataRead.textContent = optionSelected.value;

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
    buttonDeleteBook.addEventListener('click', ()=>{
        const row = buttonDeleteBook.parentElement;
        libraryTable.removeChild(row);
    });

    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    displayLibrary();
    dialogNewBook.close();
    
    //micut test
    // for(book of myLibrary){
    //     console.log(book.title);
    // } 
}