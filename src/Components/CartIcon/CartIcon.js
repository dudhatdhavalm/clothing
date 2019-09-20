import React from "react";
import cartIconSvg from "../../Assets/car_icon.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Actions/Cart/CartActions";
import { selectCartItemsCount } from "../../Reducers/Cart/CartSelector";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  CartIconItemCount,
  CartIconShopingIcon
} from "./CartIconStyles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <CartIconShopingIcon src={cartIconSvg} alt="cart-icon" />
    <CartIconItemCount>{itemCount}</CartIconItemCount>
  </CartIconContainer>
);

const mapDispatchToProps = {
  toggleCartHidden
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
