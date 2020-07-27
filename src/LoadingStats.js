import React, {useState, useEffect} from 'react';
import './App.css';

function LoadingStats({stillLoading}) {

    if (!stillLoading) {
        return null;
    }
    else {
    return (
        <div className="userBanner">
            <div className="bannerHeader divider">Spielerinformationen:</div>
            <div className="loading">
                <div className="userTextes userName">Lade Daten...</div>
                <div className="lds-dual-ring"></div>
            </div>
        </div>
    );
    };
};

export default LoadingStats;