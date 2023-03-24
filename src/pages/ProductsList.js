import React from 'react'
import "../css/Categories.css";
import { Typography } from "@mui/material";
const ProductsList = () => {
  const products = [
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    },
    {
      name: "Product",
      image: require('../assets/images.jpg'),
    }
  ];

  return (
    <>
      <div className="cards">
        {products.map((item, index) => {
          console.log(item)
          return (
            <div key={index} className="card" style={{ marginBottom: "50px", display: 'flex', flexDirection: 'column' }}>
              <img src={item.image} className="card" />
              <Typography variant="h5" textAlign="center">{item.name}</Typography>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default ProductsList