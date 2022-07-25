import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";

import Listing from "../Listing/Listing";

import styles from "./Filter.module.css";

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div
      className={`styles.sidebar ${
        isCollapse ? styles.collapse : styles.notCollapse
      }`}
    >
      <div className={styles.title}>
        <div>
          <h2>Toronto Places for</h2>
          <div>
            <input type="radio" value="rent" name="rentsublet" />
            <label>RENT</label>
            <input type="radio" value="sublet" name="rentsublet" />
            <label>SUBLET</label>
          </div>
        </div>

        <button
          onClick={(e) => {
            setIsCollapse(!isCollapse);
          }}
        >
          <AiOutlineLeft />
        </button>
      </div>

      <hr />

      <table className="filter">
        <tbody>
          <tr>
            <td>Rent/Rented</td>
            <td>Price</td>
          </tr>
          <tr>
            <td>More Filters</td>
            <td>Get Alerts</td>
          </tr>
        </tbody>
      </table>

      <div className="uni-distance">
        University - distance - estimated travel time
      </div>

      <div className="listings">
        <Listing />
      </div>
    </div>
  );
};

export default SideBar;
