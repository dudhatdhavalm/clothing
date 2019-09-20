import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Reducers/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../Actions/Cart/CartActions";
import {
  CartDropdownContainer,
  CartDropdownEmptyMessage,
  CartDropdownItems,
  CheckoutButton
} from "./CartDropdownStyles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartDropdownItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <CartDropdownEmptyMessage>Your cart is empty</CartDropdownEmptyMessage>
      )}
    </CartDropdownItems>
    <CheckoutButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
