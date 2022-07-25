import React from "react";
// import styles from "./Listing.module.css";

const listingData = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    overview: {
      utilities: {
        includeHydro: true,
        includeHeat: true,
        includeWater: true,
        includeWifi: false,
      },
      parking: 0,
      agreementTypeMonths: "12",
      isPetFriendly: true,
    },
    unit: {
      sizeSqrt: "",
      furnished: true,
      appliances: ["laundry", "fridge/freezer"],
      airConditioning: true,
      personalOutdoorSpace: "",
      isSmokingPermitted: false,
    },
    buildingAmenities: ["Elevator in Building", "Indoor Pool", "Indoor Gym"],
    price: 4200,
    address: "31 Sullivan St",
    bedroom: 3,
    bathroom: 2,
    date_listed: new Date(2022, 1, 1),
    area: "spadina",
    description:
      "Amazing 3 Bedroom 2 Bathroom City Home In The Heart Of Yonge & Summerhill. Spacious Main Floor With Living, Dining, Kitchen And Family Room And 2 Pc. Private, Garden With Seating Area & Parking From The Lane. Steps To Subway, Yonge St, Restaurants And Shops, Laundry In The Basement With Lots Of Storage. Live The Life At Yonge And Summerhill. EXTRAS: Fridge, Stove, Dishwasher, Washer, Dryer, Electric Light Fixtures. Tenant Pays All Utilities. The Current Living Room And Diningroom Lights Excluded Will Be Replaced By The Landlord.",
  },
];

const Listing = () => {
  return (
    <div className="listing">
      <div className="images">
        <img src={listingData[0].images[0]} alt="img" />
      </div>
      <div className="box-description">
        <div className="price">
          <h4>$4,200</h4>
          <p>4 days</p>
        </div>

        <div className="description">
          <h6>{listingData.description}</h6>
          <h6>31 Sullivan St</h6>
          <p>3BD | 2BA | 1 Parking</p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
