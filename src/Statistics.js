import React, { useState, useEffect } from 'react';
import './App.css';

function Statistics() {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

  var requestOptions = {
      headers: myHeaders,
  };
  
  const [search, setSearch] = useState("");
  const [query, setquery] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    if (query != "") {
      fetchItems();
    }
  }, [query]);

  const fetchItems = async () => {
      const data = await fetch(`https://fortniteapi.io/lookup?username=Ipac_Melvin&platform=epic`, requestOptions);

      const items = await data.json();

      console.log(items);
      setPlayerId(items)

      const data2 = await fetch(`https://fortniteapi.io/stats?account=${items.account_id}`, requestOptions);
      const userStats = await data2.json();

      console.log(userStats);
      setPlayerStats(userStats);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    setSearch("");
  };


  return (
    <div>
      <div className="siteInfoBar">
        <h3>Hier kannst Du Playerstatistiken einsehen!</h3>
      </div>
      <div className="shopCard">
        <form onSubmit={getSearch} className="searchForm">
          <input className="searchBar" type="text" value={search} onChange={updateSearch} />
          <button className="searchButton" type="submit" >Suche</button>
        </form>
      </div>
      <div className="shopCard">
        <h3>Sorry, this Account is private!</h3>
      </div>
    </div>
  );
}

export default Statistics;
