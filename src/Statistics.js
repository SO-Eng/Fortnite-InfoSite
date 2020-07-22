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
  const [platform, setPlatform] = useState("");
  
  
  useEffect(() => {
    if (query != "") {
      //fetchItems();
    }
  }, [query]);
  
  const fetchItems = async () => {
    if (query == "") {
      return;
    }
    if (platform != "epic") {
      const data = await fetch(`https://fortniteapi.io/lookup?username=${query}&platform=${platform}`, requestOptions);
      const items = await data.json();
    
      console.log(items);
      setPlayerId(items)
      
      const data2 = await fetch(`https://fortniteapi.io/stats?account=${items.account_id}`, requestOptions);
      const userStats = await data2.json();
      
      console.log(userStats);
      setPlayerStats(userStats);
    }
    else{
      const data = await fetch(`https://fortniteapi.io/lookup?username=${query}`, requestOptions);
      const items = await data.json();
    
      console.log(items);
      setPlayerId(items)
      
      const data2 = await fetch(`https://fortniteapi.io/stats?account=${items.account_id}`, requestOptions);
      const userStats = await data2.json();
      
      console.log(userStats);
      setPlayerStats(userStats);
    }
  };
  
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  
  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    fetchItems();
    //setSearch("");
  };
  
  const getSelection = e => {
    let {value} = e.target;
    console.log(value);
    setPlatform(value);
    };
  
  return (
    <div>
      <div className="siteInfoBar">
        <h3>Hier kannst Du Playerstatistiken einsehen!</h3>
      </div>
      <div className="shopCard">
        <form onSubmit={getSearch} className="searchForm">
          <input className="searchBar" type="text" value={search} onChange={updateSearch} />
          <select className="selectBar" onChange={getSelection}>
            <option value="epic">Epic</option>
            <option value="xbl">X-Box</option>
            <option value="psn">PlayStation</option>
          </select>
          <button className="searchButton" type="submit" >Suche</button>
        </form>
      </div>
      <div className="shopCard">
        <h1>Hier kommen bald die Infos!!!</h1>
      </div>
    </div>
  );
}

export default Statistics;
