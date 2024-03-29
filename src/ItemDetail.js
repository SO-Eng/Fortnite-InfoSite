import React, { useState, useEffect } from "react";
import "./App.css";
import RareColor from "./helper/GetItemRarity";
import { Link } from "react-router-dom";

function Item({ match }) {
  const [item, setItem] = useState({ images: {} });

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

  var requestOptions = {
    headers: myHeaders,
  };

  const fetchItems = async () => {
    const data = await fetch(
      `https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=de`,
      requestOptions
    );

    const item = await data.json();
    setItem(item.item);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const getLastVisit = () => {
    var visited = localStorage.getItem("back");

    return visited;
  };

  return (
    <div className="shopCard">
      <div className="siteInfoBar">
        <Link className="linkText" to={`/${getLastVisit()}`}>
          <div className="backButton">Zurück</div>
        </Link>
      </div>
      <div className="itemSite">
        <div className={`itemBox ${RareColor(item.rarity)}`}>
          <p className="itemName">{item.name}</p>
          <div className="itemContent">
            <div className="itemText">
              <p className="itemDescr">{item.description}</p>
              <p className="itemDescr">Typ: {item.type}</p>
              <p className="itemDescr">Set: {item.set}</p>
              <p className="itemDescr">Rarität: {item.rarity}</p>
              <p className="itemDescr">
                {item.price != "" ? `Price: ${item.price} V` : ""}
              </p>
            </div>
            <div>
              <img className="imagesItem" src={item.images.icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
