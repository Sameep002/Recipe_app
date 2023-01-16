import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'

// const APP_ID = '07b4be02';
// const APP_KEY = '4f2770bb7901e964a4297bfa5972b5fb';
// https://api.edamam.com/search?q=salad&app_id=07b4be02&app_key=4f2770bb7901e964a4297bfa5972b5fb

//557c9c5562ca4f14a5deb69b9488db48
//https://api.spoonacular.com/recipes/complexSearch?apiKey=557c9c5562ca4f14a5deb69b9488db48
//https://api.spoonacular.com/recipes/pasta/information?apiKey=557c9c5562ca4f14a5deb69b9488db48

const SearchRecipes = () => {
    const [Search, setSearch] = useState('');
    // let Recipes = [];
    const [Recipes, setRecipes] = useState([
        {
            "id": 654959,
            "title": "Pasta With Tuna",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceName": "foodista.com",
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-with-tuna-654959",
            "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "pickfreshfoods.com",
            "id": 511728,
            "title": "Pasta Margherita",
            "readyInMinutes": 45,
            "servings": 4,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-margherita-511728",
            "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "foodista.com",
            "id": 654812,
            "title": "Pasta and Seafood",
            "readyInMinutes": 45,
            "servings": 2,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-and-seafood-654812",
            "image": "https://spoonacular.com/recipeImages/654812-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "foodista.com",
            "id": 654857,
            "title": "Pasta On The Border",
            "readyInMinutes": 45,
            "servings": 4,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-on-the-border-654857",
            "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "Foodista",
            "id": 654883,
            "title": "Pasta Vegetable Soup",
            "readyInMinutes": 45,
            "servings": 10,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-vegetable-soup-654883",
            "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "Foodista",
            "id": 654928,
            "title": "Pasta With Italian Sausage",
            "readyInMinutes": 45,
            "servings": 4,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-with-italian-sausage-654928",
            "image": "https://spoonacular.com/recipeImages/654928-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "Foodista",
            "id": 654926,
            "title": "Pasta With Gorgonzola Sauce",
            "readyInMinutes": 45,
            "servings": 8,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-with-gorgonzola-sauce-654926",
            "image": "https://spoonacular.com/recipeImages/654926-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "Foodista",
            "id": 654944,
            "title": "Pasta With Salmon Cream Sauce",
            "readyInMinutes": 45,
            "servings": 4,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-with-salmon-cream-sauce-654944",
            "image": "https://spoonacular.com/recipeImages/654944-312x231.jpg",
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "sourceName": "foodista.com",
            "id": 654905,
            "title": "Pasta With Chickpeas and Kale",
            "readyInMinutes": 45,
            "servings": 4,
            "spoonacularSourceUrl": "https://spoonacular.com/recipes/pasta-with-chickpeas-and-kale-654905",
            "image": "https://spoonacular.com/recipeImages/654905-312x231.jpg",
        }
    ]);

    const fetchRecipes = async () => {
        //const response = await Axios.get(`https://api.edamam.com/search?q=${Search}&app_id=${APP_ID}&app_key=${APP_KEY}`,
        const response = await Axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=557c9c5562ca4f14a5deb69b9488db48&query=${Search}&addRecipeInformation=true`,
        )
        // Recipes = response.data.results;
        setRecipes(response.data.results);
        // console.log(Recipes)
        // console.log(response.data);
    }
    return (
        <div className='bg-[#EEEEEE]'>
            {/* <div className="flex  bg-purple-300 justify-center">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input value={Search} onChange={(e) => {
                            e.preventDefault();
                            setSearch(e.target.value);
                        }} type="text" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search Recipes..." aria-label="Search" aria-describedby="button-addon3" />
                        <button onClick={fetchRecipes} className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                    </div>
                </div>
            </div> */}


            <div className='w-3/4 m-auto my-4'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value={Search} onChange={(e) => {
                        e.preventDefault();
                        setSearch(e.target.value);
                    }} type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Recipes..." required />
                    <button onClick={fetchRecipes} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
                <div className='text-3xl text-center my-6'>{Search}</div>
            </div>


            <section className='flex flex-wrap justify-evenly mt-10 w-full '>
                {
                    Recipes.map((element) => {
                        return (
                            // <div key={element.id} className="flex w-2/5 space-x-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            //     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={element.image} alt="" />
                            //     <div className="flex flex-col justify-between p-4 leading-normal">
                            //         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
                            //         <div className="px-2">
                            //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.vegeterian ? "Vegeterian" : "Non-vegeterian"}</span>
                            //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.vegan ? "Vegan" : "Non-Vegan"}</span>
                            //             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.glutenFree ? "glutenFree" : "Non-glutenFree"}</span>
                            //         </div>
                            //         <div className="">
                            //             <div className='text-white'>Ready in: {element.readyInMinutes} minutes</div>
                            //             <div className='text-white'>Servings: {element.servings}</div>
                            //         </div>
                            //         <p className="mb-3 text-white">Recipe: <a className='text-blue-500' href={element.spoonacularSourceUrl}>{element.sourceName}</a></p>
                            //     </div>
                            // </div>
                            <div key={element.id} className="flex justify-center h-[255px] m-2">
                                <div className=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-800 shadow-lg p-2">
                                    <img className="w-48 h-full object-cover" src={element.image} alt="" />
                                    <div className="px-4 py-2 flex flex-col justify-start">
                                        <h5 className="text-white text-xl font-medium mb-2">{element.title}</h5>
                                        <div className="px-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{element.vegeterian ? "Vegeterian" : "Non-vegeterian"}</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{element.vegan ? "Vegan" : "Non-Vegan"}</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{element.glutenFree ? "glutenFree" : "Non-glutenFree"}</span>
                                        </div>
                                        <div className="">
                                            <div className='text-white'>Ready in: {element.readyInMinutes} minutes</div>
                                            <div className='text-white'>Servings: {element.servings}</div>
                                        </div>
                                        <p className="mb-3 mt-2 text-white"><a className='text-blue-500' target="_blank" href={element.spoonacularSourceUrl}>View Recipe</a></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <footer className="bg-black text-center text-lg-start">
                <div className="text-center text-white p-3">
                    © 2020 Copyright:
                    <span className="text-white"><Link to="/">MyRecipeBook.com</Link></span>
                </div>
            </footer>
        </div>
    )
}

export default SearchRecipes