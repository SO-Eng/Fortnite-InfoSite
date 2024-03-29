import React, { useState, useEffect } from "react";
import "./App.css";
import AuthHeader from "./helper/Authorization";
import RareColor from "./helper/GetItemRarity";
import { Link } from "react-router-dom";

function Upcuming() {
  useEffect(() => {
    fetchItems();

    localStorage.setItem("back", "upcuming");
  }, []);

  const [items, setItems] = useState([{ images: {}, rarity: {} }]);

  let requestOptions = new AuthHeader();

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v1/items/upcoming?lang=de",
      requestOptions
    );

    const items = await data.json();

    setItems(items.items);
  };

  return (
    <div className="shopCard">
      <div className="siteInfoBar">
        <h3>Items insgesamt: {items.length} !!!</h3>
      </div>
      {items.map((item) => (
        <Link
          className="linkText"
          to={`/item/${item.id}`}
          key={item.id + item.name}
        >
          <div className={`card ${RareColor(item.rarity)}`}>
            <p className="cardName">{item.name}</p>
            <img className="images" src={item.images.icon} alt="" />
            <p>{item.set != "" ? `Set: ${item.set}` : ""}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Upcuming;
