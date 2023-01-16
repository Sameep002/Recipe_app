import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Cuisines = () => {
  // const [Search, setSearch] = useState('indian');
  const [Recipes, setRecipes] = useState([
    {
      "id": 652834,
      "title": "My Chicken Korma",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/my-chicken-korma-652834",
      "image": "https://spoonacular.com/recipeImages/652834-556x370.jpg",
    },
    {
      "id": 647830,
      "title": "Indian Lentil Dahl",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/Indian-Lentil-Dahl-647830",
      "image": "https://spoonacular.com/recipeImages/647830-556x370.jpg",
    },
    {
      "id": 641904,
      "title": "Easy Chicken Tandoori",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/easy-chicken-tandoori-641904",
      "image": "https://spoonacular.com/recipeImages/641904-556x370.jpg",
    },
    {
      "id": 716364,
      "title": "Rice and Peas with Coconut Curry Mackerel",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/rice-and-peas-with-coconut-curry-mackerel-716364",
      "image": "https://spoonacular.com/recipeImages/716364-556x370.jpg",
    },
    {
      "id": 716202,
      "title": "Fenugreek Roti",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/fenugreek-roti-716202",
      "image": "https://spoonacular.com/recipeImages/716202-556x370.jpg",
    },
    {
      "id": 644376,
      "title": "Garlic-Butter Naan",
      "spoonacularSourceUrl": "https://spoonacular.com/recipes/garlic-butter-naan-644376",
      "image": "https://spoonacular.com/recipeImages/644376-556x370.jpg",
    }
]);
  const fetchrecipe = (Search)=>{
    // useEffect((Search) => {
      let url = `https://api.spoonacular.com/recipes/random?apiKey=557c9c5562ca4f14a5deb69b9488db48&tags=${Search}&number=6`;
      Axios.get(url)
        .then((response) => {
          // console.log(response.data.recipes);
          setRecipes(response.data.recipes);
        })
      // }, []);
  }
  return (
    <><div className="bg-[#EEEEEE]">
      <div className='text-center text-gray-800 text-5xl font-bold py-6 italic'>Cuisines</div>
      <div className="flex space-x-12 justify-center py-">
        <button onClick={(e) => fetchrecipe(e.target.value)} value='indian' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">Indian</button>
        <button onClick={(e) => fetchrecipe(e.target.value)} value='italian' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">Italian</button>
        <button onClick={(e) => fetchrecipe(e.target.value)} value='chinese' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">Chinese</button>
        <button onClick={(e) => fetchrecipe(e.target.value)} value='french' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">French</button>
        <button onClick={(e) => fetchrecipe(e.target.value)} value='mexican' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">Mexican</button>
        <button onClick={(e) => fetchrecipe(e.target.value)} value='american' type="button" className="transition px-6 py-2.5 text-white ease-in-out delay-150 bg-gray-800 rounded shadow-md hover:-translate-y-1 hover:scale-110  hover:bg-orange-500 duration-300">American</button>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          Recipes.map((element) => {
            return (
              <>
                <div key={element.id} className="rounded-3xl overflow-hidden shadow-lg bg-gray-800 w-4/5 m-auto">
                  <img className="w-full" src={element.image || "./images/recipebk.jpg"} />
                  <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl text-white mb-2">{element.title}</div>
                    <div className='text-blue-500'><a target="_blank" href={element.spoonacularSourceUrl}>View Recipe</a></div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default Cuisines