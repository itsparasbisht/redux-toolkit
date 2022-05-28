import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
