import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySections } from "../../Reducers/Directory/DirectorySelector";
import { DirectoryContainer } from "./DirectoryStyles";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...sectionProps }) => {
      return <MenuItem key={id} {...sectionProps} />;
    })}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
