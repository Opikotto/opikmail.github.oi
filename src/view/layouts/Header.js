import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from "../../store/slices/authSlice";
import { getItemsDataCategory } from "../../store/slices/categorySlice";

import { Link } from "react-router-dom";
const Header = (param) => {

     const cartItems = useSelector(state => state.cart.cartItems).length;
     const dispatch = useDispatch();
     const handleLogout = () => {
          dispatch(setUserLogout());
     }

     useEffect(() => {
          getProductItems();
     }, []);

     const getProductItems = () => {
          dispatch(getItemsDataCategory(param));
     }
     const handleGetCategoryWomen = () => {
          if (window.location.pathname.substring(1) === "women") {
               param = "women's clothing"
          }
     }

     const handleGetCateoryMen = () => {
          if (window.location.pathname.substring(1) === "men") {
               param = "men's clothing"
          }
     }
     const handleElectronics = () => {
          if (window.location.pathname.substring(1) === "electronics") {
               param = "electronics"
          }
     }
     return (
          <header>
               <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex container px-auto flex-wrap items-center justify-between">
                         <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                                   <li className="nav-item">
                                        <Link to="/" className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                             Homepage
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link to="/men" onClick={handleGetCateoryMen(param)} className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                             Men's
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link to="/women" onClick={handleGetCategoryWomen(param)} className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                             Women's
                                        </Link>
                                   </li>
                                   <li className="nav-item mb-2 lg:mb-0">
                                        <Link to="/electronics" onClick={handleElectronics(param)} className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                             Electronics
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                         <Link to="/cart">
                              <button className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                                   <span  role="button" className="relative flex">
                                        <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                                             <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                        </svg>
                                        <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartItems}
                                        </span>
                                   </span>
                              </button>
                         </Link>

                         <button onClick={handleLogout}>Log out</button>
                    </div>
               </nav>
          </header>
     )
}

export default Header
