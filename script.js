console.log("hello world")


const openDialogBtn = document.getElementById('openDialogBtn');
const myDialog = document.getElementById('myDialog');
const closeDialogBtn = document.getElementById('closeBtn');
  
// Show dialog when "Add Book" button is clicked
openDialogBtn.addEventListener('click', () => {
 myDialog.showModal(); 
});

// Close the dialog when "Close" button is clicked
closeDialogBtn.addEventListener('click', () => {
myDialog.close();
console.log("Dialog closed") 
});
  
const myLibrary = [];

function Book() {

}

function addBookToLibrary(){
    
}