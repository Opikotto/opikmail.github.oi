import React from 'react'
import Layouts from '../layouts/Layouts'
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem } from '../../store/slices/cartSlice';

const Cart = () => {
     const cartItems = useSelector(state => state.cart.cartItems);
     const dispatch = useDispatch();

     const grandTotal = () => {
          return cartItems.reduce((a,b) => a+ b.totalPrice,0)?.toFixed(2);
      };
     return (
          <Layouts>
               <div className="container mx-auto px-8 justify-items-center justify-center  mt-10 mb-5">
                    <table className="w-full text-sm text-left text-gray-800 dark:text-gray-700">
                         <thead className="text-xs text-gray-800 uppercase bg-blue-100-50 dark:bg-white dark:text-gray-400">
                              <tr>
                                   <th scope="col" className="py-3 px-6">
                                       No
                                   </th>
                                   <th scope="col" className="py-3 px-6">
                                        Image Product
                                   </th>
                                   <th scope="col" className="py-3 px-6">
                                        Name Product
                                   </th>
                                   <th scope="col" className="py-3 px-6">
                                        Quantity
                                   </th>
                                   <th scope="col" className="py-3 px-6">
                                        Price
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   cartItems && cartItems.map((item,inx) =>{
                                        return (
                                             <tr key={inx} className="bg-white border-b dark:bg-white dark:border-gray-700">
                                              <td className="py-4 px-6">
                                                  {inx + 1}
                                             </td>
                                             <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700">
                                                   <img className="object-scale-down h-12 w-12" src={item.image}/>
                                             </td>
                                             <td className="py-4 px-6">
                                                  {item.title}
                                             </td>
                                             <td className="py-4 px-6">
                                                  {item.quantity}
                                             </td>
                                             <td className="py-4 px-6">
                                                  {item.price}
                                             </td>
                                             <td className="py-4 px-6">
                                             <button
                                             size="small"
                                             color="success"
                                             className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-300"
                                             onClick={() => dispatch(addItem(item))}>+
                                             </button>
                                             <button
                                             size="small"
                                             className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-300"
                                             color="success"
                                             onClick={() => dispatch(removeItem(item))}>-</button>
                                             </td>
                                        </tr>
                                        )
                                   })
                              }
                         </tbody>
                    </table>
                    <h4 className="bg-white pt-5 dark:bg-white dark:border-gray-700 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700">TOTAL PRICE : {grandTotal()}</h4>
               </div>
          </Layouts>
     )
}

export default Cart
