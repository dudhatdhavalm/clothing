import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  CollectionPreviewItemsContainer,
  CollectionPreviewTitle
} from "./CollectionPreviewStyles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreviewItemsContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
