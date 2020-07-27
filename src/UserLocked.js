import React, { useState, useEffect } from 'react';
import './App.css';

function UserLocked({ stillLoading, firstCall, isValid, globalStats, nameLocked }) {
    
    if (stillLoading) {
        return null;
    }
    else if (!firstCall) {
        return null;
    }

    if (globalStats != null) {
        return null;
    }
    else {
        return (
            <div className="userBanner">
                <div className="bannerHeader divider">Spielerinformationen:</div>
                <div className="userTagInfo">
                    <div className="gamerName">
                        <div className="userTextes">Name:</div>
                        <div className={isValid ? "userTextes userName" : "userTextes notValid"}>{isValid ? nameLocked : "nicht gültig"}</div>
                    </div>
                </div>
                <div className="userLocked">
                    <div className={isValid ? "fasSymbol" : "fasSymbol notValid"}>
                        <i className={isValid ? "fas fa-user-lock" : "fas fa-user-alt-slash"}></i>
                    </div>
                    <div className={isValid ? "userTextes userName" : "userTextes notValid"}>
                        {isValid ? 
                        "Sorry, dieser Account ist privat!" : 
                        "Sorry, diesen Account gibt es nicht!"}
                        </div>
                </div>
            </div>
        );
    };
};

export default UserLocked;