import React from 'react';
import './App.css';

function UserStats({ stats, game }) {

    const setHeaderColor = (define) => {

        let style = "";

        switch(define){
            case("Solo"):
            return (
                style = {
                    background: "#2cc1ff"
            })
            case("Duos"):
            return (
                style = {
                    background: "#87e339"
            })
            case("Squads"):
            return (
                style = {
                    background: "#c359ff"
            })
        }
        return style;
    };

    return(
        <div className="statsWrapper">
            <div className="statsHeader" style={setHeaderColor(game)}>
                <div className="statsGame">{game}</div>
                <div className="gameCount">{stats?.matchesplayed} Games</div>
            </div>
            <div className="statsList">
                <div>
                    <div>
                        <div className="statsBox">
                            <div className="statsKey">Wins</div>
                            <div className="statsValue">{stats?.placetop1}</div>
                        </div>
                        <div className="statsBox">
                            <div className="statsKey">Kills</div>
                            <div className="statsValue">{stats?.kills}</div>
                        </div>
                    </div>
                    <div>
                        <div className="statsBox">
                            <div className="statsKey">Punkte</div>
                            <div className="statsValue">{stats?.score}</div>
                        </div>
                        <div className="statsBox">
                            <div className="statsKey">Top 10 Platzierung</div>
                            <div className="statsValue">{(stats?.placetop1 + stats?.placetop3 + stats?.placetop5 + stats?.placetop6 + stats?.placetop10)}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="statsBox">
                            <div className="statsKey">Siegrate</div>
                            <div className="statsValue">{(stats?.winrate)*100}</div>
                        </div>
                        <div className="statsBox">
                            <div className="statsKey">K/D</div>
                            <div className="statsValue">{stats?.kd}</div>
                        </div>
                    </div>
                    <div>
                        <div className="statsBox">
                            <div className="statsKey">Überlebte Gegner</div>
                            <div className="statsValue">{stats?.playersoutlived}</div>
                        </div>
                        <div className="statsBox">
                            <div className="statsKey">Gespielte Minuten</div>
                            <div className="statsValue">{stats?.minutesplayed}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStats;