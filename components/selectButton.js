import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
const Cards = ({ item, handleClick }) => {
  const { Keyword, MDM_PARTY_INDUSTRY, price, img } = item;
  console.log("selected button item",item);
  return (
    
    <div className="cards">
      <button className="btn btn-warning btn-rounded  waves-effect"  size="lg" onClick={() => handleClick(item)}>select</button>
      {/* <button type="Button" >Select item</Button> */}
      
    </div>
  );
};

export default Cards;

// id, Keyword, autor, price, img
