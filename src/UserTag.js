import React, {useState, useEffect} from 'react';
import './App.css';

function UserTag({ firstCall, globalStats, name }) {

    function calcKD(kd) {
        const sum = ((kd?.duo.kd + kd?.solo.kd + kd?.squad.kd) / 3).toFixed(2);

        return sum;
    };

    function calcWins(wins) {
        const sum = (wins?.duo.placetop1 + wins?.solo.placetop1 + wins?.squad.placetop1);

        return sum;
    };

    function calcWinRate(winRate) {
        const sum = ((winRate?.duo.winrate + winRate?.solo.winrate + winRate?.squad.winrate) / 3 * 100).toFixed(1);

        return sum + " %";
    };

    function calcKills(kills) {
        var nf = Intl.NumberFormat();
        const sum = (kills?.duo.kills + kills?.solo.kills + kills?.squad.kills);

        return nf.format(sum);
    };

    if (!firstCall) {
        return null;
    }
    else if (globalStats == null) {
        return null;
    }
    else {
        return (
            <div className="userBanner">
                <div className="bannerHeader divider">Spielerinfromationen:</div>
                <div className="userTagInfo">
                    <div className="gamerName">
                        <div className="userTextes">Name:</div>
                        <div className="userTextes userName">{name}</div>
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
                <div className="userGameInfo">
                    <div className="statsInfo">
                        <div className="statsText">KD:</div>
                        <div className="statsText userName">{calcKD(globalStats)}</div>
                    </div>
                    <div className="statsInfo">
                        <div className="statsText">Wins:</div>
                        <div className="statsText userName">{calcWins(globalStats)}</div>
                    </div>
                    <div className="statsInfo">
                        <div className="statsText">Winrate:</div>
                        <div className="statsText userName">{calcWinRate(globalStats)}</div>
                    </div>
                    <div className="statsInfo">
                        <div className="statsText">Kills:</div>
                        <div className="statsText userName">{calcKills(globalStats)}</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default UserTag;