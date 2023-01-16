import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Nutrition = () => {
  const [Search, setSearch] = useState('');
  const [calories, setcalories] = useState({});
  const [carbs, setcarbs] = useState({});
  const [fat, setfat] = useState({});
  const [protein, setprotein] = useState({});
  const fetchNutrition = async () => {
    const response = await Axios.get(`https://api.spoonacular.com/recipes/guessNutrition?title=${Search}&apiKey=557c9c5562ca4f14a5deb69b9488db48`,
    )
    setcalories(response.data.calories);
    setcarbs(response.data.carbs);
    setfat(response.data.fat);
    setprotein(response.data.protein);
  }
  // console.log(Nutrition.value);
  // const { calories , carbs , fat , protein} = Nutrition;
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
          }} type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Nutrition..." required />
          <button onClick={fetchNutrition} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        <div className='text-3xl text-center my-6'>{Search}</div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-3/4 mx-auto my-20">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Nutrients
              </th>
              <th scope="col" className="py-3 px-6">
                Value
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Calories
              </th>
              <td className="py-4 px-6">
                {calories.value}
              </td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                {calories.unit}
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Carbs
              </th>
              <td className="py-4 px-6">
                {carbs.value}
              </td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                {carbs.unit}
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Fats
              </th>
              <td className="py-4 px-6">
                {fat.value}
              </td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                {fat.unit}
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                Proteins
              </th>
              <td className="py-4 px-6">
                {protein.value}
              </td>
              <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                {protein.unit}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="bg-black text-center text-lg-start bottom-0 fixed w-full">
        <div className="text-center text-white p-3">
          © 2020 Copyright:
          <span className="text-white"><Link to="/">MyRecipeBook.com</Link></span>
        </div>
      </footer>
    </>
  )
}

export default Nutrition