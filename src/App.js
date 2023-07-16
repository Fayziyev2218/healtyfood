import logo from './logo.svg';
import './App.css';
import Test from './test';
import {Route,Routes} from "react-router-dom"
import Layout from './companents/Layout';
import Button from './companents/button';
import Home from './companents/home';
import Products from './products';
import Single from './single';
import Category from './catigory';
import About from './about';
import Productcateygory from './procateygory';
import Contact from './contact';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Layout>
        
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/category' element={<Category/>}/> */}
        <Route path="/contact" element={<Contact/>} />

        <Route path='/category' element={<Category/>}>


        <Route path='/category/:id' element={<Productcateygory/>}/>
        </Route>
        <Route path='/products/:id' element={<Single/>}/>
      </Routes>


      <ToastContainer />

      </Layout>
    
    </div>
  );
}

export default App;
