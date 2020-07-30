import React from 'react';
import './App.css';

function RecentMatches({ matches, mode }) {

    const getPlatform = (platform) => {
        switch(platform){
            case "gamepad":
                return "fas fa-gamepad";
            case "keyboardmouse":
                return "fas fa-keyboard";
            case "touch":
                return "fas fa-mobile-alt";
        };
    };

    const getModeName = (modeName) => {
        let i;

        for(i = 0; i < mode?.length; i++) {
            if (modeName.toLowerCase() == mode[i].id.toLowerCase()) {
                return mode[i].name;
            }
        }
    };

    const getPicture = (modeName) => {
        let i;

        for(i = 0; i < mode?.length; i++) {
            if (modeName.toLowerCase() == mode[i].id.toLowerCase()) {
                return mode[i].image;
            }
        }
    };

    const getPlacement = (placement) => {
        if (placement?.placetop1 >= 1) {
            return "1";
        };
        if (placement?.placetop3 >= 1) {
            return "2-3";
        };
        if (placement?.placetop5 >= 1) {
            return "4-5";
        };
        if (placement?.placetop6 >= 1) {
            return "6";
        };
        if (placement?.placetop10 >= 1) {
            return "7-10";
        };
        if (placement?.placetop12 >= 1) {
            return "11-12";
        };
        if (placement?.placetop25 >= 1) {
            return "13-25";
        };
        return "--"
    };

    const convertDate = (date) => {
        let newDate = new Date(date);
        return newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString();
    };

    const formatNum = (num) => {
        let nf = Intl.NumberFormat();
        return nf.format(num);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="8" className="tableHead">Letzte Spiele</th>
                    </tr>
                    <tr>
                        <th>Platform</th>
                        <th colSpan="2">Mode</th>
                        <th>Platzierung</th>
                        <th>Kills</th>
                        <th>Überlebte Gegner</th>
                        <th>Punkte</th> 
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(info => info.platform == "bp" ? null : (
                        <tr key={info.score + info.mode + info.playersoutlived}>
                            <td><i className={getPlatform(info.platform)}></i></td>
                            <td><img src={getPicture(info.mode)} alt="" className="tableImage"/></td>
                            <td className="modeText">{getModeName(info.mode)}</td>
                            <td>{getPlacement(info)}</td>
                            <td>{formatNum(info.kills)}</td>
                            <td>{formatNum(info.playersoutlived)}</td>
                            <td>{formatNum(info.score)}</td>
                            <td>{convertDate(info.date)}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="tableBottom"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RecentMatches;