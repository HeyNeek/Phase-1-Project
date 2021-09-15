// creating variable to hold our url to json data
const base_url = 'http://localhost:3000/groceries'; 
// creating variable and assigning our html button to it
const addBtn = document.getElementById('add_button'); 
// creating variable that we will use later for our Add to cart button function, it's purpose to grab the correct object values, a state that switch to other states
let currentSelectedItem; 

//fetching our grocery json data
fetch(base_url)
    .then((resp) => resp.json())//converting our json data 
    .then((groceryData) => groceryData.forEach((grocery) => renderGrocery(grocery)))//using a forEach method to render all of our groceries

function renderGrocery(groceryItem){
    //create span element inside html and assign to item variable
    const item = document.createElement('span');
    //assign the text content of the item span with the value of the name property of the grocery obj
    item.textContent = groceryItem.name; 
    //creating variable and assigning our html div with the id of grocery_bar to it
    const groceryGallery = document.getElementById('grocery_bar');
    //appending our new item span to the groceryGallery div
    groceryGallery.appendChild(item);
    //put a click event listener on each of our spans
    item.addEventListener('click', function(e){
        //to make sure we are getting the correct object when we click on the span element
        console.log(groceryItem);
        //creating a variable and assigning it to the p html element with the id of name
        const itemName = document.getElementById('name');
        itemName.textContent = groceryItem.name;// assigning appropriate textContent to variable
        //creating a variable and assigning it to the p html element with the id of price
        const itemPrice = document.getElementById('price');
        itemPrice.textContent = `$${groceryItem.price}`;//assigning appropriate textContent to variable using string concatenation
        //creating a variable and assigning it to the img html element with the id of image
        const itemImg = document.getElementById('image');
        itemImg.src = groceryItem.image;//assigning appropriate source to the image variable
        //assigning our blank state variable to the value of the object being clicked on
        currentSelectedItem = groceryItem;
        
    })

}
//creating a variable for our add to cart button function, to accumulate the total price
let totalPrice = 0;
//adding a click event listener on our addBtn variable 
addBtn.addEventListener('click', function(){
    //creating a variable that holds the grab the price property of the currently selected item state in our other click event listener
    const price = currentSelectedItem.price;
    //reassigning the value of our global totalPrice variable with some addition
    totalPrice = totalPrice + price;
    console.log(totalPrice);//logging the total price just to make sure everything's working right
    //creating a variable and assigning it to the span html element with the id of total_price
    let groceryCartPrice = document.getElementById('total_price');
    groceryCartPrice.textContent = `$${totalPrice}`;//assigning the textContent of our groceryCartPrice variable to the value of the totalPrice variable
})
