// reusable functions
function getValue(id){
    const value = document.getElementById(id).value;
    
    return value;
}
function getValueNumber(id){
    const value = document.getElementById(id).value;
    const valueNumber = parseInt(value);

    return valueNumber;
}
function getInnerTextNumber(id){
    const innerText = document.getElementById(id).innerText;
    const innerTextNumber = parseInt(innerText);

    return innerTextNumber;
}
function getElement(id){
    const element = document.getElementById(id)
    return element;
}

function getElements(className){
    const elements = document.getElementsByClassName(className)
    return elements;
}

// fetch all plants
const allPlants = () => {
    const url = 'https://openapi.programming-hero.com/api/plants'
    const result = fetch(url)
    .then((res)=> res.json())
    .then((json) => displayPlants(json.plants))
    
}
// fetch all categories
const allCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/categories'
    const result = fetch(url)
    .then((res)=> res.json())
    .then((json) => displayCategories(json.categories))
    
}
// fetch plant by id
const addToCart = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const result = fetch(url)
    .then((res)=> res.json())
    .then((json) => showToCart(json.plants))
    
}
const removeCartItem = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const result = fetch(url)
    .then((res)=> res.json())
    .then((json) => deleteFromCart(json.plants))
}

const deleteFromCart = (item) => {
    // const cartContainer = getElement('cart-container')
    const cartItem = getElement(`cart-item-${item.id}`)
    cartItem.remove()

    const totalCartPrice = getInnerTextNumber('total-cart-price-container');
    console.log(totalCartPrice)

    const newCartTotal = totalCartPrice - item.price;
    
    setNewCartTotal(newCartTotal)
    
}

// {
//     "id": 25,
//     "image": "https://i.ibb.co.com/svtZJ7nw/money-plant-min.jpg",
//     "name": "Money Plant",
//     "description": "A popular indoor climber believed to bring prosperity. Thrives easily in soil or water with minimal care.",
//     "category": "Climber",
//     "price": 350
// }
const showToCart = (plant) => {
    // console.log(plant)
    const totalCartPrice = getInnerTextNumber('total-cart-price-container');
    console.log(totalCartPrice)
    const cartContainer = getElement('cart-container')
    const div = document.createElement('div')
    
    div.innerHTML = `
        <div class="flex justify-between items-center bg-[#f0fdf4] p-3 rounded-xl mb-2">
            <div>
                <h2 class="text-[14px] text-black mb-2 font-semibold">${plant.name}</h2>
                <h3 class="text-[16px] text-gray-400">৳ <span id="price">${plant.price}</span> x <span id="quantity">1</span></h3>
            </div>
            <div id="remove-cart-item-${plant.id}" onClick="removeCartItem(${plant.id})" class="btn btn-outline border-none text-[16px] text-gray-400">x</div>
        </div>
    `
    div.setAttribute('id', `cart-item-${plant.id}`)
    cartContainer.appendChild(div)
    //cart calculation

    const newCartTotal = totalCartPrice + plant.price;
    
    setNewCartTotal(newCartTotal)
    // totalCartPrice.innerText = newCartTotal;
}

const setNewCartTotal = (total) => {
    const cartTotal = getElement('total-cart-price-container')
    cartTotal.innerText = total;
    console.log(total)
}

// {
//     "id": 1,
//     "category_name": "Fruit Tree",
//     "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// }
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');

    for(const category of categories){ 
        // console.log(category)
        const li = document.createElement('li');
        li.classList.add('category-btn', 'bg-none', 'w-full', 'text-[#1f2937]', 'p-3')
        // console.log(ul);
        li.innerText = category.category_name; 

        li.setAttribute('id','category-id-'+category.id)
        li.setAttribute('onClick', `loadPlants(${category.id})`)
        // `
        //     <li id="category-id-${category.id}" onClick="loadPlants(${category.id})" class="category-btn bg-none w-full text-[#1f2937] p-3">${category.category_name}</li>
        // `
        
        // console.log(category)
        categoryContainer.appendChild(li)
    }
}


//load Fruits
/**
 * 
 * get id of category
 * 
 * add active to this category 
 */

// {
//     "id": 4,
//     "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
//     "name": "Gulmohar",
//     "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
//     "category": "Flowering Tree",
//     "price": 400
// }
const loadPlants = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        const clickBtn = document.getElementById(`category-id-${id}`)
        removeActive()
        clickBtn.classList.add('active-category')
        displayPlants(json.plants)
    })

}

const removeActive = () => {
    const allBtns = document.querySelectorAll('.category-btn') 
    // console.log(allBtns)
    allBtns.forEach((btn) => btn.classList.remove('active-category'))
    
}


// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }


const displayPlants = (plants) => {
    const plantContainer = document.getElementById('plant-container')
    plantContainer.innerHTML = '';

    plants.forEach((plant) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="card bg-base-100 w-70 h-100 shadow-sm p-4">
                <figure class="h-[180px]">
                    <img
                    src="${plant.image}"
                    alt="fruit" />
                </figure>
                <div class="mt-3">
                    <h2 onClick="productDetails(${plant.id})" class="font-semibold">${plant.name}</h2>
                    <p class="text-[12px] text-[#1f2937] my-2">${plant.description}</p>
                    <div class="card-actions flex justify-between items-center"> 
                        <button class="btn bg-[#dcfce7] text-[#15803D] rounded-full">${plant.category}</p></button>
                        <h3 class="font-semibold">৳ <span id="price">${plant.price}</p></span></h3>
                    </div>
                    
                    <button onClick="addToCart(${plant.id})" class="btn bg-[#15803d] text-white text-[12px] rounded-full w-full py-2 mt-4">Add to Cart</button>

                </div>
            </div>
        
        `
        plantContainer.appendChild(div);
    });

    

}

const  productDetails = async (id) => {
        const url = `https://openapi.programming-hero.com/api/plant/${id}`
        const response = await fetch(url)
        const details = await response.json()
        displayPlantDetails(details.plants)
    }

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }


const displayPlantDetails = (plant) => {
    console.log(plant)
    const detailsContainer =document.getElementById('details-container');
    detailsContainer.innerHTML = `
         <div class="">
            <h2 class="text-2xl font-bold mb-3">${plant.name}</h2>
            <figure class="">
                <img src="${plant.image}" alt="fruit" class="w-[500px] h-[250px] mb-3 rounded-lg" />
            </figure>
            <p class="mb-3"><span class="font-semibold">Category: </span>${plant.category}</p>  
            <p class="mb-3"><span class="font-semibold">Price: </span>${plant.price}</p>  
            <p class="mb-3"><span class="font-semibold">Description: </span>${plant.description}</p>  
        </div>
    `
    document.getElementById('plant_modal').showModal();
}
allCategories()
allPlants()
