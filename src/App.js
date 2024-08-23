import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

//1. Main page, login page, product detail page
//1.1 Navigation bar
//2. Main page can view all the products
//3. When login button is clicked, login page renders
//4. When product detail is clicked and not logged in, login page renders first
//5. When the user is logged in, product detail page can be viewed.
//6. when log out button is clicked, user is logged out
//7. if the user is logged out, product detail cannot be viewed and login page renders.
//8. When the user is logged in, the icon changes to logout and vice versa
//9. Can search for a product

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>

        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </div>
  );
}

export default App;
