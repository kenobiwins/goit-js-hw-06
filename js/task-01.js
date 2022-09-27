const categories = document.getElementById('categories');

console.log(`Number of categories: ${categories.children.length}`);

for (const item of categories.children) {

    const title = item.firstElementChild;
    const elements = item.lastElementChild.children.length;
        
    console.log(`Category: '${title.textContent}'`);
    console.log(`Elements: ${elements}`);
};