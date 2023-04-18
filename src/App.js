/* eslint-disable */
import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown]= useState(false);
  const showCartHandler = ()=> {
    setCartIsShown(true)
  }
  const hideCartHander = ()=> {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHander} />}
      <Header onshowCart= {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
