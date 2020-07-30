import React, {useState, useEffect} from 'react';
import './App.css';
import UserStats from './UserStats';
import RecentMatches from './RecentMatches';

function UserTag({ stillLoading, firstCall, globalStats, input, name, level, matches, mode }) {

    const [userStats, setUserStats] = useState([]);
    const [activeName, setActiveName] = useState("all");

    const calcKD = (kd) => {
        if (level?.level == null) {
            return 0;
        }
        let count = 0;

        if (kd?.duo?.kd != null) {
            count += 1;
        }
        if (kd?.solo?.kd != null) {
            count += 1;
        }
        if (kd?.squad?.kd != null) {
            count += 1;
        }
        if (count === 0) {
            count = 1;
        }

        const sum = (((kd?.duo?.kd == null ? 0 : kd.duo.kd) + 
                    (kd?.solo?.kd == null ? 0 : kd.solo.kd) + 
                    (kd?.squad?.kd == null ? 0 : kd.squad.kd)) / count).toFixed(2);
        return sum;
    };

    const calcWins = (wins) => {
        if (level?.level == null) {
            return 0;
        }

        const sum = ((wins?.duo?.placetop1 == null ? 0 : wins.duo.placetop1) + 
                    (wins?.solo?.placetop1 == null ? 0 : wins.solo.placetop1) + 
                    (wins?.squad?.placetop1 == null ? 0 : wins.squad.placetop1));
        return sum;
    };

    const calcWinRate = (winRate) => {
        if (level?.level == null) {
            return 0;
        }
        let count = 0;

        if (winRate?.duo?.kd != null) {
            count += 1;
        }
        if (winRate?.solo?.kd != null) {
            count += 1;
        }
        if (winRate?.squad?.kd != null) {
            count += 1;
        }
        if (count === 0) {
            count = 1;
        }

        const sum = (((winRate?.duo?.winrate == null ? 0 : winRate.duo.winrate) + 
                    (winRate?.solo?.winrate == null ? 0 : winRate.solo.winrate) + 
                    (winRate?.squad?.winrate == null ? 0 : winRate.squad.winrate)) / count * 100).toFixed(1);
        return sum;
    };

    const calcKills = (kills) => {
        if (level?.level == null) {
            return 0;
        }

        let nf = Intl.NumberFormat();
        const sum = ((kills?.duo?.kills == null ? 0 : kills.duo.kills) + 
                    (kills?.solo?.kills == null ? 0 : kills.solo.kills) + 
                    (kills?.squad?.kills == null ? 0 : kills.squad.kills));

        return nf.format(sum);
    };

    const formatNum = (num) => {
        let nf = Intl.NumberFormat();

        return nf.format(num);
    };

    const changePlatform = e => {
        e.preventDefault();

        if (e?.target.value == "all") {
            setUserStats(globalStats);
        }
        if (e?.target.value == "keyboardmouse") {
            if (input.keyboardmouse == undefined) {
                setUserStats("undefined");
            }
            else{
                setUserStats(input?.keyboardmouse);
            }
        }
        if (e?.target.value == "gamepad") {
            if (input.gamepad == undefined) {
                setUserStats("undefined");
            }
            else{
                setUserStats(input?.gamepad);
            }
        }
        if (e?.target.value == "touch") {
            if (input.touch == undefined) {
                setUserStats("undefined");
            }
            else{
                setUserStats(input?.touch);
            }
        }
        // Set active button by name
        setActiveName(e.target.value);
    };

    useEffect(() => {
        setUserStats(globalStats);
    }, []);

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
                            <button className={activeName == "all" ? "platformButtons platformActive" : "platformButtons"} value="all" onClick={changePlatform}>All</button>
                            <button className={activeName == "keyboardmouse" ? "platformButtons platformActive" : "platformButtons"} value="keyboardmouse" onClick={changePlatform}>Keyboard</button>
                            <button className={activeName == "gamepad" ? "platformButtons platformActive" : "platformButtons"} value="gamepad" onClick={changePlatform}>GamePad</button>
                            <button className={activeName == "touch" ? "platformButtons platformActive" : "platformButtons"} value="touch" onClick={changePlatform}>Touch</button>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="userGameInfo">
                        <div className="statsInfo">
                            <div className="statsText">K/D:</div>
                            <div className="statsText userName">{formatNum(calcKD(userStats == undefined ? globalStats : userStats))}</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Wins:</div>
                            <div className="statsText userName">{formatNum(calcWins(userStats == undefined ? globalStats : userStats))}</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Winrate:</div>
                            <div className="statsText userName">{formatNum(calcWinRate(userStats == undefined ? globalStats : userStats))} %</div>
                        </div>
                        <div className="statsInfo">
                            <div className="statsText">Kills:</div>
                            <div className="statsText userName">{calcKills(userStats == undefined ? globalStats : userStats)}</div>
                        </div>
                    </div>
                </div>
                <div className="userStatsWrapper">
                    <UserStats stats={userStats == undefined ? globalStats.solo : userStats.solo} game={"Solo"}/>
                    <UserStats stats={userStats == undefined ? globalStats.duo : userStats.duo} game={"Duos"}/>
                    <UserStats stats={userStats == undefined ? globalStats.squad : userStats.squad} game={"Squads"}/>
                </div>
                <div className="userStatsWrapper">
                    <RecentMatches matches={matches} mode={mode} />
                </div>
            </div>
        );
    }
};

export default UserTag;