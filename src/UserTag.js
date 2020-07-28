import React, {useState, useEffect} from 'react';
import './App.css';
import UserStats from './UserStats';

function UserTag({ stillLoading, firstCall, globalStats, name }) {

    const calcKD = (kd) => {
        const sum = ((kd?.duo.kd + kd?.solo.kd + kd?.squad.kd) / 3).toFixed(2);

        return sum;
    };

    const calcWins = (wins) => {
        const sum = (wins?.duo.placetop1 + wins?.solo.placetop1 + wins?.squad.placetop1);

        return sum;
    };

    const calcWinRate = (winRate) => {
        const sum = ((winRate?.duo.winrate + winRate?.solo.winrate + winRate?.squad.winrate) / 3 * 100).toFixed(1);

        return sum;
    };

    const calcKills = (kills) => {
        var nf = Intl.NumberFormat();
        const sum = (kills?.duo.kills + kills?.solo.kills + kills?.squad.kills);

        return nf.format(sum);
    };

    const formatNum = (num) => {
        var nf = Intl.NumberFormat();

        return nf.format(num);
    };

    if (stillLoading) {
        return null;
    }
    else if (!firstCall) {
        return null;
    }
    else if (globalStats == null) {
        return null;
    }
    else {
        return (
            <div>
                <div className="userBanner">
                    <div className="bannerHeader divider">Spielerinformationen:</div>
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
                            <div className="statsText">K/D:</div>
                            <div className="statsText userName">{formatNum(calcKD(globalStats))}</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Wins:</div>
                            <div className="statsText userName">{formatNum(calcWins(globalStats))}</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Winrate:</div>
                            <div className="statsText userName">{formatNum(calcWinRate(globalStats))} %</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Kills:</div>
                            <div className="statsText userName">{calcKills(globalStats)}</div>
                        </div>
                    </div>
                </div>
                <div className="userStatsWrapper">
                    <UserStats stats={globalStats.solo} game={"Solo"}/>
                    <UserStats stats={globalStats.duo} game={"Duos"}/>
                    <UserStats stats={globalStats.squad} game={"Squads"}/>
                </div>
            </div>
        );
    }
};

export default UserTag;