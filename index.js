const base_url = 'http://localhost:3000/groceries';

fetch(base_url)
    .then((resp) => resp.json())
    .then((groceryData) => groceryData.forEach((grocery) => renderGrocery(grocery)))

function renderGrocery(groceryItem){
    const item = document.createElement('span');

    item.textContent = groceryItem.name;

    const groceryGallery = document.getElementById('grocery_bar');

    groceryGallery.appendChild(item);

    item.addEventListener('click', function(e){
        const itemName = document.getElementById('name');
        itemName.textContent = groceryItem.name;

        const itemPrice = document.getElementById('price');
        itemPrice.textContent = groceryItem.price;

        const itemImg = document.getElementById('image');
        itemImg.src = groceryItem.image;
    })

}