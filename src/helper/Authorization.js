import React from 'react';

class Authorization extends React.Component {

    constructor() {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "ee3d5450-77773ada-2c1933ae-2df885f8");
    
        let requestOptions = {
            headers: myHeaders,
        };
    
        return requestOptions;
    };
}

export default Authorization;