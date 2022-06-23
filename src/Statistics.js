import React, { useState, useEffect } from "react";
import Locked from "./UserLocked";
import "./App.css";
import AuthHeader from "./helper/Authorization";
import UserLocked from "./UserLocked";
import UserTag from "./UserTag";
import Loading from "./LoadingStats";

function Statistics() {
  let requestOptions = new AuthHeader();

  let query = "";
  let apiCall = "";
  const [isLoading, setIsLoading] = useState(false);
  const [apiCalled, setApiCalled] = useState(false);
  const [search, setSearch] = useState("");
  const [playerStats, setPlayerStats] = useState([]);
  const [recentMatches, setRecentMatches] = useState([]);
  const [gameModes, setGameModes] = useState([]);
  const [platform, setPlatform] = useState("");

  const setConnectionString = () => {
    if (platform == "epic" || platform == "") {
      apiCall = `https://fortniteapi.io/v1/lookup?username=${query}`;
    } else {
      apiCall = `https://fortniteapi.io/v1/lookup?username=${query}&platform=${platform}`;
    }
  };

  const fetchItems = async () => {
    if (apiCall === "") {
      return;
    }

    const data = await fetch(apiCall, requestOptions);
    const items = await data.json();

    setIsLoading(true);

    const data2 = await fetch(
      `https://fortniteapi.io/v1/stats?account=${items.account_id}`,
      requestOptions
    );
    const userStats = await data2.json();

    setPlayerStats(userStats);

    const data3 = await fetch(
      `https://fortniteapi.io/v1/matches?account=${items.account_id}`,
      requestOptions
    );
    const matches = await data3.json();

    setRecentMatches(matches);

    setIsLoading(false);
    setApiCalled(true);

    const data4 = await fetch(
      "https://fortniteapi.io/v1/game/modes?lang=de",
      requestOptions
    );
    const modes = await data4.json();

    setGameModes(modes);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    query = search;
    setConnectionString();
    fetchItems();
  };

  const getSelection = (e) => {
    let { value } = e.target;
    setPlatform(value);
  };

  return (
    <div>
      <div className="siteInfoBar">
        <h3>Hier kannst Du Playerstatistiken einsehen!</h3>
      </div>
      <div className="searchField">
        <p className="searchHeader">
          Suche nach Spielern aus dem Fortnite Universum
        </p>
        <form onSubmit={getSearch} className="searchForm">
          <input
            className="searchBar"
            type="text"
            value={search}
            placeholder="Gib einen Spielernamen ein:"
            onChange={updateSearch}
          />
          <select className="selectBar" onChange={getSelection}>
            <option value="epic">Epic</option>
            <option value="xbl">X-Box</option>
            <option value="psn">PlayStation</option>
          </select>
          <button className="searchButton" type="submit">
            Suche
          </button>
        </form>
      </div>
      <div className="statisticsSite">
        <Loading stillLoading={isLoading} />
        <UserTag
          stillLoading={isLoading}
          firstCall={apiCalled}
          globalStats={playerStats.global_stats}
          input={playerStats.per_input}
          name={playerStats.name}
          level={playerStats.account}
          matches={recentMatches.matches}
          mode={gameModes.modes}
        />
        <div>
          <Locked
            stillLoading={isLoading}
            firstCall={apiCalled}
            isValid={playerStats.result}
            globalStats={playerStats.global_stats}
            nameLocked={playerStats.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
