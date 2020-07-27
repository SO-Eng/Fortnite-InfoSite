import React, { useState, useEffect } from 'react';
import './App.css';

function UserLocked({ stillLoading, firstCall, globalStats, nameLocked }) {
    
    if (stillLoading) {
        return null;
    }
    else if (!firstCall) {
        return null;
    }

    if (globalStats != null) {
        return null;
    }
    else{
    return (
        <div className="userBanner">
            <div className="bannerHeader divider">Spielerinformationen:</div>
            <div className="userTagInfo">
                    <div className="gamerName">
                        <div className="userTextes">Name:</div>
                        <div className="userTextes userName">{nameLocked}</div>
                    </div>
            </div>
            <div className="userLocked">
                <div className="fasSymbol"><i className="fas fa-user-lock"></i></div>
                <div className="userTextes userName">Sorry, dieser Account ist privat!</div>
            </div>
        </div>
    );}
};

export default UserLocked;