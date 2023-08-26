const ul = document.querySelector('#categories');

const numOfCat = ul.children.length;
console.log(`Number of categories: ${numOfCat}`);

const liEl = ul.querySelectorAll('.item');

liEl.forEach(item => {
    const liCategory = item.querySelector('h2').textContent;
    const numElem = item.querySelectorAll('li').length;
     console.log(`Category: ${liCategory}`);
    console.log(`Elements: ${numElem}`);
});



