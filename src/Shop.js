import React, { useState, useEffect } from 'react';
import './App.css';
//import AuthHeader from './headerAuth/Authorization';
import Countdown from './Countdown';
import RareColor from './helper/GetItemRarity';
import {Link} from 'react-router-dom';

function Shop() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");

    var requestOptions = {
        headers: myHeaders,
    };
    
    const [featuredItems, setFeaturedItems] = useState([]);
    const [specialFeaturedItems, setSpecialFeaturedItems] = useState([]);
    const [dailyItems, setDailyItems] = useState([]);
    const [endingDates, setEndingDates] = useState([ {endingDates: {} } ]);
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

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
        setEndingDates(items.endingDates);
    };

    useEffect(() => {
        fetchItems();

        const selected = localStorage.getItem('shopSelection');

        if (selected == 'dayli') {
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
        else {
            setIsActiveOne(true);
            setIsActiveTwo(false);
        }
    },[]);

    const selectShopFeatured = () => {
        setIsActiveOne(true);
        setIsActiveTwo(false);
        localStorage.setItem('shopSelection', 'featured');

    };

    const selectShopDayli = () => {
        setIsActiveOne(false);
        setIsActiveTwo(true);
        localStorage.setItem('shopSelection', 'dayli');
    };
    
    return (
    <div>
        <div className="countDown">
            <Countdown timeTillDate={endingDates.daily} timeFormat="YYYY MM DD, hh:mm:ss+hh:mm"/>
        </div>
        <div className="shopButtons">
            <div className={isActiveOne ? "shopButton shopButtonActive" : "shopButton"} onClick={selectShopFeatured}>Vorgestellte Gegenstände</div>
            <div className={isActiveTwo ? "shopButton shopButtonActive" : "shopButton"} onClick={selectShopDayli}>Tägliche Gegenstände</div>
        </div>
        {!isActiveOne ? 
        <div className="shopCard">
            {dailyItems.map(item => (
            <Link className="linkText" to={`/item/${item.id}`} key={item.id}>
                <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                    <p className="cardName">{item.name}</p>
                    <img className="images" src={item.image} alt=""/>
                    <p>{`Price: ${item.price} V`}</p>
                </div>
            </Link>
        ))}
        </div> 
        : 
        <div className="shopCard">
        {featuredItems.map(item => (
            <Link className="linkText" to={`/item/${item.id}`} key={item.id}>
                <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                    <p className="cardName">{item.name}</p>
                    <img className="images" src={item.image} alt=""/>
                    <p>{`Price: ${item.price} V`}</p>
                </div>
            </Link>
        ))}
        {specialFeaturedItems.map(item => (
            <Link className="linkText" to={`/item/${item.id}`} key={item.id}>
                <div className={`card ${RareColor(item.rarity)}`} key={item.id}>
                    <p className="cardName">{item.name}</p>
                    <img className="images" src={item.image} alt=""/>
                    <p>{`Price: ${item.price} V`}</p>
                </div>
            </Link>
        ))}
        </div>}
    </div>
    );
}

export default Shop;
