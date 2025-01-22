async function fetchBooks() {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/books");
    const books = await response.json();
    displayBooks(books);
  } catch (error) {
    console.error("Errore nel recupero dei libri:", error);
  }
}

function displayBooks(books) {
  const booksContainer = document.getElementById("books-container");
  booksContainer.innerHTML = "";
  books.forEach((book) => {
    const col = document.createElement("div");
    col.classList.add("col-md-3");

    col.innerHTML = `
        <div class="card">
          <img src="${book.img}" class="card-img-top" alt="Copertina di ${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">€${book.price}</p>
            <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
          </div>
        </div>
      `;

    booksContainer.appendChild(col);
  });
}

function removeCard(button) {
  const card = button.closest(".card");
  card.parentNode.removeChild(card);
}

document.addEventListener("DOMContentLoaded", fetchBooks);
