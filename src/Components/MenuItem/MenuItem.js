import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  MenuItemBackgroundImage,
  ContentContainer,
  ContentTitle,
  ContentSubTitle
} from "./MenuItemStyles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemBackgroundImage className="background-image" imageUrl={imageUrl} />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
