import React from "react";
import "../css/Categories.css";
import { Typography } from "@mui/material";

const Categories = () => {
  const categories = [
    {
      name: "FRUITS",
      image: require('../assets/fruits.jpg'),
    },
    {
      name: "VEGETABLES",
      image: require('../assets/vege.jpg'),
    },
    {
      name: "FERTILISERS",
      image: require('../assets/fertilizer.jpg'),
    },
    {
        name: "TOOLS",
        image: require('../assets/tools.jpg'),
      }
  ];

  return (
    <>
      <div className="cards">
        {categories.map((item, index) => {
            console.log(item)
            return(
          <div key = {index} className="card" style={{marginBottom: "50px", display:'flex', flexDirection:'column'}}>
            <img src={item.image} className="card" />
           <Typography variant="h5" textAlign="center">{item.name}</Typography>
          </div>
        )}
        )}
      </div>
    </>
  );
};

export default Categories;
