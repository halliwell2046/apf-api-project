const baseURL = "https://openlibrary.org/api/books?bibkeys=ISBN:";
let url;

const searchTerm = document.querySelector('.searchbox');
const searchForm = document.querySelector('form');
const books = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
  e.preventDefault();
  url = `${baseURL}${searchTerm.value}&format=json`;
  fetch(url)
    .then(result => result.json())
    .then(json => {
      console.log(json);
      displayResults(json);
    })
    .catch(err => console.log(err));
}

function displayResults(instance){
  (b => {
    let bookinfo = document.createElement('p');
    bookinfo.src = b.preview_url;
    books.appendChild(bookinfo);
    console.log(bookinfo)
  });
}




