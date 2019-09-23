import React from 'react';
import {SyncConfigContainer} from "../components/SyncConfig/SyncConfigContainer";

function Settings() {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <SyncConfigContainer />
        </div>
    );
}

export default Settings