import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Products = () => {
  const [Search, setSearch] = useState('');
  const [Product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await Axios.get(`https://api.spoonacular.com/food/products/search?apiKey=557c9c5562ca4f14a5deb69b9488db48&query=${Search}`,
    )
    setProduct(response.data.products);
    // console.log(Product)
    // console.log(response.data.products);
  }
  return (
    <>
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
          <button onClick={fetchProducts} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        <div className='text-3xl text-center my-6'>{Search}</div>
      </div>

      <section className='flex flex-wrap justify-evenly mt-10 w-full'>
        {Product.map((element) => {
          return (
            // <div className="p-10" key={element.id}>
            //     <div className="md:max-w-sm rounded overflow-hidden shadow-lg md:h-[400px] hover:-translate-y-1 hover:scale-110 duration-300 bg-white">
            //         <img className="w-full h-52" src={element.image}/>
            //         <div className="px-2 md:px-6 py-4">
            //             <div className="font-bold mb-2 text-sm md:text-base">{element.title}</div>
            //         </div>
            //     </div>
            // </div>

            // <div class="flex justify-center">
            //   <div key={element.id} className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            //     <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={element.image} alt="" />
            //     <div className="p-6 flex flex-col justify-start">
            //       <h5 className="text-gray-900 text-xl font-medium mb-2">{element.title}</h5>
            //     </div>
            //   </div>
            // </div>

            <div key={element.id} className="flex justify-center h-[255px] m-2">
              <div className=" flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-800 shadow-lg p-2">
                <img className="w-48 h-full object-cover" src={element.image} alt="" />
                <div className="px-4 py-2 flex flex-col justify-start">
                  <h5 className="text-white text-xl font-medium mb-2">{element.title}</h5>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      <footer className="bg-black text-center text-lg-start bottom-0 fixed w-full">
        <div className="text-center text-white p-3">
          © 2020 Copyright:
          <span className="text-white"><Link to="/">MyRecipeBook.com</Link></span>
        </div>
      </footer>
    </>
  )
}

export default Products