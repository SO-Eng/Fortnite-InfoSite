import React, { useState, useEffect } from 'react';
import './App.css';
import AuthHeader from './helper/Authorization';
import RareColor from './helper/GetItemRarity';
import {Link} from 'react-router-dom';

function Upcuming() {

    useEffect(() => {
        fetchItems();

        localStorage.setItem('back', 'upcuming');
    }, []);

    const [items, setItems] = useState([{  images: {}, rarity: {} } ]);

    let requestOptions = new AuthHeader();

    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/items/upcoming?lang=de', requestOptions);

        const items = await data.json();

        console.log(items.items);
        setItems(items.items);
    };

    return (
        <div className="shopCard">
            <div className="siteInfoBar">
                <h3>Items insgesamt: {items.length} !!!</h3>
            </div>
            {items.map(item => (
                <Link className="linkText" to={`/item/${item.id}`} key={item.id}>
                    <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                        <p className="cardName" key={item.id}>{item.name}</p>
                        <img className="images" src={item.images.icon} alt=""/>
                        <p>{item.set != "" ? `Set: ${item.set}` : ""}</p>
                    </div>
                </Link>
            ))}
        </div>
        );
    }

export default Upcuming;
