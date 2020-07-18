import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Upcuming() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");
    
    var requestOptions = {
      headers: myHeaders,
    };

    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/items/upcoming?lang=de', requestOptions);

        const items = await data.json();

        console.log(items.items);
        setItems(items.items);
    };

    return (
        <div className="shopCard">
            {items.map(item => (
                <Link className="linkText" to={`/upcuming/${item.id}`} key={item.id}>
                    <div className="card" key={item.id}>
                        <p className="cardName">{item.name}</p>
                        <img className="images" src={item.images.background} alt=""/>
                        <p>{item.set != "" ? `Set: ${item.set}` : ""}</p>
                    </div>
                </Link>
            ))}
        </div>
        );
    }

export default Upcuming;
