import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col w-full my-20">
      <div className="flex justify-around">
        <h1 className="text-5xl font-extrabold">YOUR CART🔻</h1>
        <button
          onClick={handleClearItems}
          className="text-3xl bg-green-500 w-28 rounded-lg cursor-pointer hover:bg-green-600"
        >
          Clear
        </button>
      </div>
      <div className="my-20 p-2 bg-gray-200">
        {cartItems.length===0 && <h1 className="text-3xl font-semibold text-center">Looks Empty, go add some items now !!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
