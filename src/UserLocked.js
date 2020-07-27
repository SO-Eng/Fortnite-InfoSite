import React, { useState, useEffect } from 'react';
import './App.css';

function UserLocked({ firstCall, globalStats }) {
    
    if (!firstCall) {
        return null;
    }

    if (globalStats != null) {
        return null;
    }
    else{
    return (
        <div className="userBanner">
            <div className="bannerHeader divider">Spielerinfromationen:</div>
            <div className="userLocked">
                <div className="fasSymbol"><i className="fas fa-user-lock"></i></div>
                <div className="userTextes userName">Sorry, dieser Account ist privat!</div>
            </div>
        </div>
    );}
};

export default UserLocked;