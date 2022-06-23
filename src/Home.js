import React, { useState, useEffect } from "react";
import "./App.css";
import AuthHeader from "./helper/Authorization";
import { Link } from "react-router-dom";

function Home() {
  let requestOptions = new AuthHeader();

  useEffect(() => {
    fetchItems();
  }, []);

  const [news, setNews] = useState([{ live: {} }]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortniteapi.io/v1/news?lang=de&type=br",
      requestOptions
    );

    const items = await data.json();

    setNews(items.news);
  };

  const isLive = (live) => {
    let style = "";

    if (live) {
      style = {
        color: "#35eb93",
      };
    } else {
      style = {
        color: "#b36627",
      };
    }
    return style;
  };

  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <div className="shopCard">
      <div className="siteInfoBar">
        <h1>FortNite Master Site</h1>
      </div>
      <div className="startPic">
        <div className="homeStart">
          <div className="homeStartInfo">
            <h1>Hier kannst Du Informationen</h1>
            <h1>über FortNite, Items und Spieler</h1>
            <h1>erhalten!</h1>
            <h2>Schau Dich um, viel Spaß dabei!</h2>
          </div>
          <img
            className="fnMap"
            src="https://media.fortniteapi.io/images/maps/map-13.30-2.png?showPOI=true"
            alt=""
          />
        </div>
      </div>
      <div className="shadowBox"></div>
      <div className="homeNews">
        <h2 className="newsHeader">News</h2>
        <div>
          {news.map((item) => (
            <div className="newsItems" key={item.title + item.date}>
              <img className="imageNews" src={item.image} alt="" />
              <div className="newsTextBox">
                <div className="newsTitle">{item.title}</div>
                <p className="newsBody">{item.body}</p>
                <div className="newsInfo">
                  <p style={isLive(item.live)} className="newsLive">
                    {item.live ? "Live auf den Servern" : "Leider vorbei..."}
                  </p>
                  <p className="newsDate">Vom: {convertDate(item.date)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
