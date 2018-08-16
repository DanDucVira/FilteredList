// Get input element
let filter = document.getElementById('filter');
// Add event listener
filter.addEventListener('keyup', filterNames);


function filterNames() {
    // Get value of input
    let filterValue = document.getElementById('filter').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names');
    // Get lis from ul
    let li = ul.querySelectorAll('li.list-group-item');

    // Loop through collection-item lis
    for (let i = 0; i < li.length; i++) {

        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';

        } else {
            li[i].style.display = 'none';
        }
    }

}