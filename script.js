//your JS code here. If required.
// Select form elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitButton = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Event listener for adding a book
submitButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Get input values
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    // Check if all fields are filled
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    // Add the row to the table
    bookList.appendChild(row);

    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
});

// Event listener for deleting a book
bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to remove this book?')) {
            const row = e.target.parentElement.parentElement;
            bookList.removeChild(row);
        }
    }
});
