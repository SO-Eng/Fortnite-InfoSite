import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {

    const [item, setItem] = useState( { images: {} } );

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");
    
    var requestOptions = {
      headers: myHeaders,
    };

    const fetchItems = async () => {
        const data = await fetch(`https://fortniteapi.io/items/get?id=${match.params.id}&lang=de`, requestOptions);

        const item = await data.json();
        setItem(item.item);
        console.log(item.item);
    };

    
    useEffect(() => {
        fetchItems();
    }, []);

    const getItemRarity = (rarity) => {
        switch(rarity) {
            case "uncommon":
                return "cardCommon";
            case "rare":
                return "cardRare";
            case "epic":
                return "cardEpic";
            case "dc":
                return "cardDc";
            case "shadow series":
                return "cardShadow";
        };
    };

    if (!item.item == null) {
        return (
            <h2 className="itemSite">Loading...</h2>
        );
    }
    else{
    return (
        <div className="itemSite">
            <div className={`itemBox ${getItemRarity(item.rarity)}`}>
            <p className="itemName">{item.name}</p>
                <div className="itemContent">
                    <div className="itemText">
                        <p className="itemDescr">{item.description}</p>
                        <p className="itemDescr">Typ: {item.type}</p>
                        <p className="itemDescr">Set: {item.set}</p>
                        <p className="itemDescr">Rarität: {item.rarity}</p>
                    </div>
                    <div>
                        <img className="imagesItem" src={item.images.icon} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        );
    };
}
export default Item;
