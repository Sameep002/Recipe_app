import React from 'react'
import { Link } from 'react-router-dom'
import Cuisines from './Cuisines'

const Landingpg = () => {
  return (
    <>
      <div className='justify-evenly max-w-full  bg-gray-800  sm:flex-row md:flex'>
        <div className='md:w-2/5 flex items-center justify-center sm:w-full'>
          <div className='space-y-4'>
            <h1 className='text-center text-white lg:text-5xl md:text-3xl sm:2xl'>My Recipe Book</h1>
            <h3 className='text-center text-white lg:text-xl md:text-sm sm:text-xs'>A place to explore great dishes and cuisines.</h3>
            <div className='flex justify-center'>
              <button type="button" className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><Link to="/recipes">Explore Recipes</Link></button>
            </div>
          </div>
        </div>
        <div className='md:w-3/5 flex justify-center sm:w-full'>
          <img className='max-h-screen' src="./images/recipebk.jpg" alt="" />
        </div>
      </div>

      <Cuisines />
      
      <footer className="bg-black text-center text-lg-start">
        <div className="text-center text-white p-3">
          © 2020 Copyright:
          <span className="text-white"><Link to="/">MyRecipeBook.com</Link></span>
        </div>
      </footer>
    </>
  )
}

export default Landingpg