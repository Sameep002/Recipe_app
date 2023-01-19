import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className=" border-gray-200 px-2 md:px-4 md:py-5 py-2.5 bg-gray-900 flex sm:block ">
                <div className="container flex flex-wrap items-center justify-center sm:justify-between mx-auto">
                    <div className="flex items-center">
                        <img src="./images/recipe-book.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
                        <span className="self-center md:text-base xl:text-xl font-semibold whitespace-nowrap dark:text-white">MyRecipe Book</span>
                    </div>
                    <div className="w-full md:w-auto flex justify-center md:mr-8" id="navbar-default">
                        <ul className=" mt-4 space-x-8 md:space-x-8 md:mt-0  md:text-base xl:text-xl flex ">
                            <li>
                                <div className="  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/">Home</Link></div>
                            </li>
                            <li>
                                <div className="  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/recipes">Recipes</Link></div>
                            </li>
                            <li>
                                <div className="  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link to="/nutrition">Nutrition</Link></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar