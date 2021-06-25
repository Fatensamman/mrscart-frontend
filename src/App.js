import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Products from './component/Products.js';
import { Route } from 'react-router-dom';
import Cart from './component/cart/cart.js';
import Details from './component/details/details.js';


function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details/:id" component={Details} />
      </main>
      <Footer />
    </>
  );
}

export default App;
