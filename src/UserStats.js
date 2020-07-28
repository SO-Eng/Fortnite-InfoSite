import React from 'react';
import './App.css';

function UserStats({ stats, game }) {

    return(
        <div className="statsWrapper">
            <div className="statsHeader">
                <div className="statsGame">{game}</div>
                <div className="gameCount">{stats.matchesplayed} Games</div>
            </div>
            <div className="statsList">
                <div className="statsBox">
                    <div className="statsKey">Wins</div>
                    <div className="statsValue">{stats.placetop1}</div>
                </div>
                <div className="statsBox">
                    <div className="statsKey">Kills</div>
                    <div className="statsValue">{stats.kills}</div>
                </div>
                <div className="statsBox">
                    <div className="statsKey">Win %</div>
                    <div className="statsValue">{(stats.winrate)*100}</div>
                </div>
                <div className="statsBox">
                    <div className="statsKey">K/D</div>
                    <div className="statsValue">{stats.kd}</div>
                </div>
            </div>
        </div>
    );
};

export default UserStats;