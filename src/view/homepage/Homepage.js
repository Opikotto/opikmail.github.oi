import React from 'react'
import Layouts from '../layouts/Layouts'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsData } from "../../store/slices/productSlice";
import ProductCard from '../../components/productCard'

const Homepage = () => {
     const dispatch = useDispatch();
     const [visible, setVisible] = useState(6)
     const productList = useSelector(state => state.product.productItems);
     const [hidden, setHidden] = useState(false)
     //     set pagination product with load button 
     const showMoreItems = () => {
          if (visible < productList.length) {
               setVisible((datavalue) => datavalue + 6);
          }
          visible < productList.length ? setVisible((datavalue) => datavalue + 6) : setHidden(true)
     }
     useEffect(() => {
          getProductItems();
     }, []);

     const getProductItems = () => {
          dispatch(getItemsData(visible));
     }
     return (

          <Layouts>
               {
                    productList.length === 0 ?
                         <div className="w-fit mx-auto flex items-center h-screen content-center align-middle">
                              <div>
                                   <svg aria-hidden="true" role="status" className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                   </svg>
                              </div>
                         </div> :
                         <>
                              <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                                   {productList.slice(0, visible).map((product) => {

                                        return (
                                             <div key={product.id} >
                                                  <ProductCard product={product} />
                                             </div>
                                        )
                                   })}

                              </div>

                              <div className="flex justify-center mb-9">
                                   <button onClick={showMoreItems} className={"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow " + (hidden ? 'hidden' : 'show')}>Load More</button>
                              </div>
                         </>
               }

          </Layouts>



     )
}

export default Homepage

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

