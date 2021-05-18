import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory-selector";

import "./directory.style.scss";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherParams }) => {
        return <MenuItem key={id} {...otherParams} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
