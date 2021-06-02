import { withRouter, Link } from "react-router-dom";

import React from "react";
import CollectionItem from "../collection-tem/collection-item.component";
import "./collection-preview.style.scss";

const CollectionPreview = ({ items, title, match }) => {
   return (
      <div className="collection-preview">
         {/* <h1 className="title" >{ title + " Mizan" }</h1> */}
         <Link className="title" to={`${match.path}/${title.toLowerCase()}`}>
            {title}
         </Link>
         <div className="preview">
            {items
               .filter((item, idx) => idx < 4)
               .map((item) => {
                  return <CollectionItem key={item.id} item={item} />;
               })}
         </div>
      </div>
   );
};

export default withRouter(CollectionPreview);
