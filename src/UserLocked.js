import React, { useState, useEffect } from 'react';
import './App.css';

function UserLocked({ globalStats, firstCall }) {
    
    if (!firstCall) {
        return null;
    }

    if (globalStats != null) {
        return null;
    }
    else{
    return (
        <div>LOCKED from UserLocked.js</div>
    );}
};

export default UserLocked;