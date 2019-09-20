import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../Reducers/Shop/ShopSelector";
import CollectionItem from "../../Components/CollectionItem/CollectionItem";
import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItem
} from "./CollectionPageStyles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItem>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItem>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
