import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../Actions/Cart/CartActions";
import {
  CollectionItemContainer,
  CollectionItemImageContainer,
  CollectionItemFooterContainer,
  CollectionFooterNameContainer,
  CollectionFooterPriceContainer,
  AddButton
} from "./CollectionItemStyles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImageContainer imageUrl={imageUrl} className="image" />>
      <CollectionItemFooterContainer>
        <CollectionFooterNameContainer>{name}</CollectionFooterNameContainer>
        <CollectionFooterPriceContainer>{price}</CollectionFooterPriceContainer>
      </CollectionItemFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = {
  addItem
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
