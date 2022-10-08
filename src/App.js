import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './view/login/Login';
import Homepage from './view/homepage/Homepage';
import { useSelector } from "react-redux";
import Women from './view/category/Women'
import Men from './view/category/Men'
import Cart from './view/cart/Cart'
import Electronics from './view/category/Electronics'
function App() {
     const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
     if(!isLoggedIn){
          return <Login />
     }
   
  return (
    <div className="App">
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="*" element="404 Not found" />
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
