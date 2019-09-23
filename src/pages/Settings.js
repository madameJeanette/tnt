import React from 'react';
import {Container} from "semantic-ui-react";
import {SyncConfigContainer} from "../components/SyncConfig/SyncConfigContainer";

function Settings() {
    return (
        <Container  className="settings">
            <h1>Settings</h1>
            <SyncConfigContainer />
        </Container >
    );
}

export default Settings