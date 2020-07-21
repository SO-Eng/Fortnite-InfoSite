import React, { useState, useEffect } from 'react';
import './App.css';

function Statistics() {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

  var requestOptions = {
      headers: myHeaders,
  };
  
  useEffect(() => {
      fetchItems();
  }, []);

  const [playerId, setPlayerId] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);

  const fetchItems = async () => {
      const data = await fetch('https://fortniteapi.io/lookup?username=iPhr3ak', requestOptions);

      const items = await data.json();

      console.log(items.account_id);
      setPlayerId(items.account_id)

      if (playerId != null) {
          const data2 = await fetch(`https://fortniteapi.io/stats?account=${items.account_id}`, requestOptions);
          const items2 = await data2.json();
  
          console.log(items2);
          setPlayerStats(items2);
      }
  };


  return (
    <div>
      <div className="siteInfoBar">
        <h3>Hier kannst Du Playerstatistiken einsehen!</h3>
      </div>
      <div className="shopCard">
        <h1>Name: {playerStats.name}</h1>
      </div>
      <div className="shopCard">
        <h3>Sorry, this Account is private!</h3>
      </div>
    </div>
  );
}

export default Statistics;
