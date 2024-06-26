import React from "react";

let card = [
  {
    id: 1,
    title: "$0/Month",
    price: "free",
    features: [
      { isIncluded: true, feature: "single User" },
      { isIncluded: true, feature: "5GB Storage" },
      { isIncluded: true, feature: "Unlimited Public Projects" },
      { isIncluded: true, feature: "Community Access" },
      { isIncluded: false, feature: "Unlimited Private Projects" },
      { isIncluded: false, feature: "Dedicated Phone Support" },
      { isIncluded: false, feature: "Free Subdomain" },
      { isIncluded: false, feature: "Monthly Reports" },
    ],
    btn: false,
  },
  {
    id: 2,
    title: "$5/Month",
    price: "Plus",
    features: [
      { isIncluded: true, feature: "5 Users" },
      { isIncluded: true, feature: "50GB Storage" },
      { isIncluded: true, feature: "Unlimited Public Projects" },
      { isIncluded: true, feature: "Community Access" },
      { isIncluded: true, feature: "Unlimited Private Projects" },
      { isIncluded: true, feature: "Dedicated Phone Support" },
      { isIncluded: true, feature: "Free Subdomain" },
      { isIncluded: false, feature: "Monthly Status Reports" },
    ],
    btn: false,
  },
  {
    id: 3,
    title: "$49/Month",
    price: "Pro",
    features: [
      { isIncluded: true, feature: "Unlimited Users" },
      { isIncluded: true, feature: "50GB Storage" },
      { isIncluded: true, feature: "Unlimited Public Projects" },
      { isIncluded: true, feature: "Community Access" },
      { isIncluded: true, feature: "Unlimited Private Projects" },
      { isIncluded: true, feature: "Dedicated Phone Support" },
      { isIncluded: true, feature: "Unlimited Free Subdomains" },
      { isIncluded: true, feature: "Monthly Status Reports" },
    ],
    btn: true,
  },
];

export default function App() {
  let content = card.map((item) => (
    <div key={item.id} style={{backgroundColor : "white", padding : "20px", borderRadius:"5px"}}>
      <h3 style={{textAlign: "center"}}>{item.price}</h3>
      <h1>{item.title}</h1>
      <ul>
        {item.features.map((feature, index)  => (
          <li style={{color : feature.isIncluded == true ? "#121111" : "#9f949486"}} key={index}>{feature.feature} 
          </li>
        ))}
      </ul>
      <button
        className="btn"
        style={{
          backgroundColor: item.btn == true ? "blue" : "#6c9be2",
          margin : "10px", 
          padding : "10px",
          borderRadius : "5px", 
          display : "block"
        }}
      >
        button
      </button>
    </div>
  ));

  return (
    <div
      className="content"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "50px",
        border: "1px solid black",
        borderRadius: "10px",
        margin : "200px",
        gap : "20px",
        backgroundColor : "#4a72f5"
      }}
    >
      {content}
    </div>
  );
}
