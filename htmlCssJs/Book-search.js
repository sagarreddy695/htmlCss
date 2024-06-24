let searchInput = document.getElementById("searchInput");
let selectDisplayCount = document.getElementById("selectDisplayCount");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let popularBooks = document.getElementById("popularBooks");
let NoSearchResults = document.getElementById("NoSearchResults");
let BooksCount = 10;
let BookTitle = ""
let booklist = [];


function createAndAppendBook(book) {
    //console.log(book.imageLink)
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card", "col-6", "col-md-4");
    searchResults.appendChild(bookCard);

    //book card image 
    let imageEle = document.createElement("img");
    imageEle.src = book.imageLink;
    imageEle.classList.add("image-ele");
    bookCard.appendChild(imageEle);
    //author details 
    let authorEle = document.createElement("p");
    authorEle.textContent = book.author;
    authorEle.classList.add("author-info");
    bookCard.appendChild(authorEle);

}

displaySearchResult = (jsonData) => {
    booksList = jsonData.search_results
    //console.log(typeof(booksList))
    let propOwn = Object.getOwnPropertyNames(booksList);
    console.log(propOwn.length);
    //console.log(booksList)
    if (propOwn.length == 1) {
        NoSearchResults.classList.remove("d-none")
        popularBooks.classList.add("d-none")
    } else {
        NoSearchResults.classList.add("d-none")
        for (let book of booksList) {
            //console.log(book)
            createAndAppendBook(book)
        }
    }
}


fetchBooksdata = () => {
    //console.log(BooksCount)
    //console.log(BookTitle)
    let url = `https://apis.ccbp.in/book-store?title=${BookTitle}&maxResults=${BooksCount}`
    options = {
        method: "GET",
    }
    searchResults.textContent = "";
    spinner.classList.remove("d-none");
    searchResults.classList.add("d-none");
    popularBooks.classList.add("d-none");
    NoSearchResults.classList.add("d-none")
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            //console.log(jsonData)
            spinner.classList.add("d-none");
            searchResults.classList.remove("d-none");
            popularBooks.classList.remove("d-none");
            NoSearchResults.classList.remove("d-none")
            displaySearchResult(jsonData)

        })

}

changeBooksCount = (event) => {
    BooksCount = event.target.value;
    fetchBooksdata()
}
getBooksFromTitle = () => {
    BookTitle = event.target.value;
    fetchBooksdata()
}
fetchBooksdata();
selectDisplayCount.addEventListener('change', changeBooksCount);
searchInput.addEventListener('keydown', getBooksFromTitle)