import { IProduct } from "@/model/product";
import React, { useState } from "react";

type Props = {
  items: IProduct[];
};

type CartItem = IProduct & {
  quantity: number;
};

const Cart: React.FC<Props> = ({ items }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: IProduct) => {
    const cartItem = cartItems.find((i) => i.id === item.id);
    if (cartItem) {
      updateCartItem(item, cartItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateCartItem = (item: IProduct, quantity: number) => {
    setCartItems(
      cartItems.map((i) => (i.id === item.id ? { ...i, quantity } : i))
    );
  };

  const removeFromCart = (item: IProduct) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button type="button" onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </div>
      ))}
      <hr />
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} ({item.quantity})
          <button
            type="button"
            onClick={() => updateCartItem(item, item.quantity - 1)}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => updateCartItem(item, item.quantity + 1)}
          >
            +
          </button>
          <button type="button" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
