import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

import styles from "./Filter.module.css";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>
        <h2>Toronto Condos for Rent</h2>
        <button>
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

      <div className="">Listings</div>
    </div>
  );
};

export default SideBar;
