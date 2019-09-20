import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../Actions/Cart/CartActions";
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./CheckoutItemStyles";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img alt="item" src={imageUrl} />
      </CheckoutItemImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = {
  clearItemFromCart,
  removeItem,
  addItem
};

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
