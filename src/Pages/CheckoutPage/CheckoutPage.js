import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../Reducers/Cart/CartSelector.js";

import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem.js";
import StripeButton from "../../Components/StripeButton/StripeButton.js";
import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotal,
  CheckoutPageTextWarning
} from "./CheckoutPageStyles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutPageHeader>
        <CheckoutPageHeaderBlock>
          <span>Product</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Description</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Quantity</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Price</span>
        </CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>
          <span>Remove</span>
        </CheckoutPageHeaderBlock>
      </CheckoutPageHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutPageTotal>
        <span> Total: ${total} </span>
        <CheckoutPageTextWarning>
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242, Exp.: 01/20, CVC: 123
        </CheckoutPageTextWarning>
        <StripeButton price={total} />
      </CheckoutPageTotal>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
