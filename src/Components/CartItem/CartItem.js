import React from "react";
import {
  CartItemDetails,
  CartItemContainer,
  CartItemDetailsName
} from "./CartItemStyles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <CartItemDetails>
      <CartItemDetailsName>{name}</CartItemDetailsName>
      <span>
        {quantity} x {price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
