const ulEl = document.querySelector('#categories');

const numOfCat = ulEl.children.length;
console.log(`Number of categories: ${numOfCat}`);

const liEl = ulEl.querySelectorAll('.item');

liEl.forEach(item => {
    const liCategory = item.firstElementChild.textContent;
    const numElem = item.querySelectorAll('li').length;
     console.log(`Category: ${liCategory}`);
    console.log(`Elements: ${numElem}`);
});



