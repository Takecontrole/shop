import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Success from "./pages/Success";
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category"
        element={<ProductList />}/>
       
        <Route path="/product/:id"
         element={ <Product />}/>
        <Route path="/success"
         element={ <Success />}/>
        
        
         
        <Route path="/cart"
         element= {<Cart />}/>
        <Route path="/login" element= { <Login />}/>
        <Route path="/register"
         element= {<Register />}/>
        
        </Routes>
</BrowserRouter>
)
};

export default App;