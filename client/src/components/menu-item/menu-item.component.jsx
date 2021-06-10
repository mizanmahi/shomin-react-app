import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   return (
      <div
         className={`${size} menu-item`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
         <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="menu-item__bg"
         />

         <div className="menu-item__content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Order Now</span>
         </div>
      </div>
   );
};

export default withRouter(MenuItem);
