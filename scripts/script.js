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

// {
//     "id": 1,
//     "category_name": "Fruit Tree",
//     "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// }
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');

    for(const category of categories){ 
        // console.log(category)
        const ul = document.createElement('ul');
        // console.log(ul);
        ul.innerHTML = `
            <li id="category-id-${category.id}" onClick="loadPlants(${category.id})" class="category-btn bg-none w-full text-[#1f2937] p-3">${category.category_name}</li>
        `
        
        // console.log(category)
        categoryContainer.appendChild(ul)
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
                    
                    <button class="btn bg-[#15803d] text-white text-[12px] rounded-full w-full py-2 mt-4">Add to Cart</button>

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
         <div>
            <h2 class="text-2xl font-bold">${plant.name}</h2>
            <p>${plant.name}</p>
            <p>${plant.details}</p>  
        </div>
        <div>
            <h2 class="text-2xl">Synonyms</h2>
            
        </div>
    `
    document.getElementById('plant_modal').showModal();
}
allCategories()
allPlants()