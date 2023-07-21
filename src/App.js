import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartShow,setCartShow] = useState(false);

  const handleCartShow = () => {
    setCartShow(true);
  };

  const handleCloseButtom = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      { cartShow && <Cart onHideCart={handleCloseButtom}/>}
      <Header onShowCart={handleCartShow} /> 
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
