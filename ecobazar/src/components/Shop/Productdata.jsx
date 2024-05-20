import React from 'react';
import potato from "../../assets/img/potato.png";
import chinesecabbage from "../../assets/img/chinesecabbage.png";
import corn from "../../assets/img/corn.png";
import eggplant from "../../assets/img/eggplant.png";
import cauliflower from "../../assets/img/cauliflower.png";
import apple from "../../assets/img/apple.png";
import capsicum from "../../assets/img/capsicum.png";
import chilly from "../../assets/img/chilly.png";
import Cucumber from "../../assets/img/Cucumber.png";
import lettuce from "../../assets/img/lettuce.png";
import Finger from "../../assets/img/Finger.png";
import redcapsicum from "../../assets/img/redcapsicum.png";
import Redchilly from "../../assets/img/Redchilly.png";
import tomato from "../../assets/img/tomato.png";
import mango from "../../assets/img/mango.png";

const product=[
    {
      "id": 1,
      "name": "Big Potatoes",
      "price": 14.99,
      "rating": 4.5,
      "image": potato,
      "category": "Vegetables"
    },
    {
      "id": 2,
      "name": "Chinese Cabbage",
      "price": 14.99,
      "rating": 4.0,
      "image": chinesecabbage,
      "category": "Vegetables"
    },
    {
      "id": 3,
      "name": "Ladies Finger",
      "price": 20.99,
      "rating": 4.8,
      "image": corn,
      "category": "Vegetables",
      "outOfStock": true
    },
    {
      "id": 4,
      "name": "Eggplant",
      "price": 14.99,
      "rating": 4.2,
      "image": eggplant,
      "category": "Vegetables"
    },
    {
      "id": 5,
      "name": "Fresh Cauliflower",
      "price": 14.99,
      "rating": 4.7,
      "image": cauliflower,
      "category": "Vegetables"
    },
    {
      "id": 6,
      "name": "Green Apple",
      "price": 14.99,
      "rating": 4.6,
      "image": apple,
      "category": "Fruits"
    },
    {
      "id": 7,
      "name": "Green Capsicum",
      "price": 14.99,
      "rating": 4.3,
      "image": capsicum,
      "category": "Vegetables"
    },
    {
      "id": 8,
      "name": "Green Chili",
      "price": 14.99,
      "rating": 4.1,
      "image": chilly,
      "category": "Vegetables"
    },
    {
      "id": 9,
      "name": "Green Cucumber",
      "price": 10.99,
      "rating": 4.9,
      "image": Cucumber,
      "category": "Vegetables",
      "sale": true,
      "salePrice": 5.99
    },
    {
      "id": 10,
      "name": "Red Capsicum",
      "price": 32.00,
      "rating": 4.4,
      "image": redcapsicum,
      "category": "Vegetables"
    },
    {
        "id": 11,
        "name": "Ladies Finger",
        "price": 32.00,
        "rating": 4.4,
        "image": Finger,
        "category": "Vegetables"
      },
    {
      "id": 12,
      "name": "Green Lettuce",
      "price": 14.99,
      "rating": 4.5,
      "image": lettuce,
      "category": "Vegetables"
    },
    {
      "id": 13,
      "name": "Red Chili",
      "price": 14.99,
      "rating": 4.0,
      "image": Redchilly,
      "category": "Vegetables"
    },
    {
      "id": 14,
      "name": "Red Tomato",
      "price": 14.99,
      "rating": 4.3,
      "image": tomato,
      "category": "Vegetables"
    },
    {
      "id": 15,
      "name": "Fresh Mango",
      "price": 14.99,
      "rating": 4.6,
      "image": mango,
      "category": "Fruits"
    }
  ];
  export default product;