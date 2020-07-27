import React, { useState, useEffect } from 'react';
import Locked from './UserLocked';
import './App.css';
import UserLocked from './UserLocked';
import UserTag from './UserTag';
import Loading from './LoadingStats';

function Statistics() {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

  var requestOptions = {
      headers: myHeaders,
  };

  var query = "";
  var apiCall = "";
  const [isLoading, setIsLoading] = useState(false);
  const [apiCalled, setApiCalled] = useState(false);
  const [search, setSearch] = useState("");
  const [playerStats, setPlayerStats] = useState([]);
  const [platform, setPlatform] = useState("");


  const setConnectionString = () => {

    if (platform == "epic" || platform == "") {
      apiCall = `https://fortniteapi.io/lookup?username=${query}`;
    }
    else{
      apiCall = `https://fortniteapi.io/lookup?username=${query}&platform=${platform}`;
    }
  };

  const fetchItems = async () => {

    if (apiCall === "") {
      return;
    }

    const data = await fetch(apiCall, requestOptions);
    const items = await data.json();

    console.log(items);
    setIsLoading(true);
    
    const data2 = await fetch(`https://fortniteapi.io/stats?account=${items.account_id}`, requestOptions);
    const userStats = await data2.json();
    
    
    console.log(userStats);
    setIsLoading(false);
    setPlayerStats(userStats);
    setApiCalled(true);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    query = search;
    setConnectionString();
    fetchItems();
    //setSearch("");
  };

  const getSelection = e => {
    let {value} = e.target;
    console.log(value);
    setPlatform(value);
    };

  useEffect(() => {
    //setConnectionString();
    //fetchItems();
  }, []);

  return (
    <div>
      <div className="siteInfoBar">
        <h3>Hier kannst Du Playerstatistiken einsehen!</h3>
      </div>
      <div className="searchField">
        <p className="searchHeader">Suche nach Spielern aus dem Fortnite Universum</p>
        <form onSubmit={getSearch} className="searchForm">
          <input className="searchBar" type="text" value={search} placeholder="Gib einen Spielernamen ein:" onChange={updateSearch} />
          <select className="selectBar" onChange={getSelection}>
            <option value="epic">Epic</option>
            <option value="xbl">X-Box</option>
            <option value="psn">PlayStation</option>
          </select>
          <button className="searchButton" type="submit" >Suche</button>
        </form>
      </div>
      <div className="statisticsSite">
        <Loading stillLoading={isLoading} />
        <UserTag stillLoading={isLoading} firstCall={apiCalled} globalStats={playerStats.global_stats} name={playerStats.name}/>
        <div>
          <Locked stillLoading={isLoading} firstCall={apiCalled} isValid={playerStats.result} globalStats={playerStats.global_stats} nameLocked={playerStats.name}/>
        </div>

      </div>
    </div>
  );
}

export default Statistics;
