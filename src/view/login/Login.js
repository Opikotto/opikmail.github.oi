import React,{useState} from 'react'
import { checkUserLogin } from '../../store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
     const dispatch = useDispatch();
     const isLoading=useSelector(state => state.auth.isLoading);
     const [username,setUserName] = useState("")
     const [password,setPassword] = useState("")

     const handleSubmit = (event) => {
          event.preventDefault();
          const loginData={
            username: username,
            password: password,
          };
       
          dispatch(checkUserLogin(loginData));
        };

     return (
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
               <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-gray-600 underline">
                         Sign in
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                         <div className="mb-2">
                              <label
                                   htmlFor="username"
                                   className="block text-sm font-semibold text-gray-800"
                              >
                                   User Name : mor_2314
                              </label>
                              <input
                                   type="text"
                                   onChange={e => setUserName(e.target.value)}
                                   className="block w-full px-4 py-2 mt-2 font-semibold text-gray-800 bg-white border rounded-md focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-10"
                                   
                              />
                         </div>
                         <div className="mb-2">
                              <label
                                   htmlFor="password"
                                   className="block text-sm font-semibold text-gray-800"
                              >
                                   Password : 83r5^_
                              </label>
                              <input
                                   type="password"
                                   onChange={e => setPassword(e.target.value)}
                                   className="block w-full px-4 py-2 mt-2 font-semibold text-gray-800 bg-white border rounded-md focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring focus:ring-opacity-10"
                              />
                         </div>
                         <div className="mt-6">
                              <button 
                              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-300 focus:outline-none focus:bg-blue-600"
                              disabled={isLoading}
                              >
                                 {isLoading ? 'Loading...' : 'Login'}
                              </button>
                         </div>
                    </form>

               </div>
          </div>
     )
}

export default Login
