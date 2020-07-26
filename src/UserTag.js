import React, {useState, useEffect} from 'react';
import './App.css';

function UserTag() {

    return (
        <div className="userBanner">
            <div className="bannerHeader divider">Spielerinfromationen:</div>
            <div className="userTagInfo">
                <div className="gamerName">
                    <div className="userTextes">Name:</div>
                    <div className="userTextes userName">16 Zeichen fits!</div>
                </div>
                <div className="userOptions">
                    <div className="userTextes">Platform:</div>
                    <button className="platformButtons platformActive">All</button>
                    <button className="platformButtons">Keyboard</button>
                    <button className="platformButtons">GamePad</button>
                    <button className="platformButtons">Touch</button>
                </div>
            </div>
            <div className="divider"></div>
            <div className="userGameInfo"></div>
        </div>
    );

};

export default UserTag;