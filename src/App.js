import Form_login from '../src/Pages/Form_login/form_login';
import Banner from './components/Banner/banner';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Main_page/main_page';
import Cardapio from './Pages/Menu_1005/menu_1005';
import Cart from './Pages/Cart_client/cart_client';
import Footer from './components/Footer/footer';
import HamburguerMenu from './Pages/Menu_1005/PagesMenu/burgersmenu';
import SushiMenu from './Pages/Menu_1005/PagesMenu/sushimenu';
import PizzaMenu from './Pages/Menu_1005/PagesMenu/pizzasmenu';
import CandyMenu from './Pages/Menu_1005/PagesMenu/candysmenu';
import DrinkMenu from './Pages/Menu_1005/PagesMenu/drinksmenu';

function App() {
  return (
      <Router>
    <div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    </div>
    <div>
      <Banner/>
    </div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/minha-conta' element={<Form_login/>}></Route>
          <Route path='/carrinho' element={<Cart/>}></Route>
          <Route exact path='/cardapio' element={<Cardapio/>}></Route>
            <Route path='/burgers' element={<HamburguerMenu/>}></Route>
            <Route path='/sushis' element={<SushiMenu/>}></Route>
            <Route path='/pizzas' element={<PizzaMenu/>}></Route>
            <Route path='/bebidas' element={<DrinkMenu/>}></Route>
            <Route path='/doces' element={<CandyMenu/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
     </Router>
  )            
}

export default App;

