import React, { useState, useEffect } from 'react';
import './App.css';
import AuthHeader from './headerAuth/Authorization';
import RareColor from './helper/GetItemRarity';
import {Link} from 'react-router-dom';

function Shop() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

    var requestOptions = {
        headers: myHeaders,
    };
    
    useEffect(() => {
        fetchItems();
    }, []);

    const [featuredItems, setFeaturedItems] = useState([]);
    const [specialFeaturedItems, setSpecialFeaturedItems] = useState([]);
    const [dailyItems, setDailyItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/shop?lang=de', requestOptions);

        const items = await data.json();

        console.log(items);
        console.log(items.daily);
        setDailyItems(items.daily);
        console.log(items.featured);
        setFeaturedItems(items.featured);
        console.log(items.specialFeatured);
        setSpecialFeaturedItems(items.specialFeatured);
    };

    return (
        <div className="shopCard">
            {featuredItems.map(item => (
                <Link className="linkText" key={item.id}>
                    <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                        <p className="cardName">{item.name}</p>
                        <img className="images" src={item.image} alt=""/>
                        <p>{`Price: ${item.price} V`}</p>
                    </div>
                </Link>
            ))}
            {specialFeaturedItems.map(item => (
                <Link className="linkText" key={item.id}>
                    <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                        <p className="cardName">{item.name}</p>
                        <img className="images" src={item.image} alt=""/>
                        <p>{`Price: ${item.price} V`}</p>
                    </div>
                </Link>
            ))}
        </div>
        );
    }

export default Shop;
