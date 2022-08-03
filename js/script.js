

"use strict";

/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of table cells that you'll search through */
const tableCells = document.querySelectorAll('td');

const searchBox = (searchInput, names) => {
  console.log(searchInput);
  console.log(names);

  for(let i = 0; i < names.length; i++){

    const value = searchInput.value
    const namesSearched = names[i].textContent.toLowerCase();
    
    names[i].classList.remove('match');

    if(value.length !== 0 && namesSearched.includes(value.toLowerCase()) ){
      names[i].classList.add('match');
    }

  }

}

/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below
 */

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();
  searchBox(search, tableCells);
 
});

/* submit listener */
search.addEventListener('keyup', () => {
  searchBox(search, tableCells);

});