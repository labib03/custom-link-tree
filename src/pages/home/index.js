import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../utils";

function Home() {
  return (
    <div className="menus-item-wrapper">
      {menus?.map((item, idx) => (
        <div className="menus-item" key={idx}>
          <Link  to={`/${item?.value}`} state={item}>
            <h2>{item?.label}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
