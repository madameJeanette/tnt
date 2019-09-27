import React from 'react'
import {Action, useMutation, useSuspenseQuery} from "react-fetching-library";
import {SyncConfigSettings} from "./SyncConfigSettings";
import {BACKEND_URL} from "../../constants";
import {SaveSyncConfig} from "./SaveSyncConfig";


const getSyncConfigAction = {
    method: "GET",
    endpoint: BACKEND_URL + "/config/getSyncInfo",
    headers:
        {"Authorization": "Basic " + btoa("test:test")}


};

export const SyncConfigContainer = () => {
    const { loading, payload, error } = useSuspenseQuery(getSyncConfigAction);

    if (!payload) {
        const tempPayload = {
            key: "",
            token: "",
            boards: []
        };

        //return <p>Loading</p>
        return <SyncConfigSettings loading={loading} error={error} settings={tempPayload} />
    } else {
        console.log(payload);

        return <SyncConfigSettings loading={loading} error={error} settings={payload} />
    }
};

const saveSyncConfigAction = (formValues) => ({
    method: 'PUT',
    endpoint: BACKEND_URL + "/config/saveSync",
    body: formValues
});

export const SaveSyncConfigContainer = () => {
    const { loading, payload, mutate, error, reset, abort } = useMutation(saveSyncConfigAction);

    const handleSubmit = async (formValues) => {
        const { error: mutateError } = await mutate(formValues);

        if (mutateError) {
            //show ie. notification
            console.error(error)
        }
        console.log("Saved")
        //success
    };

    return <SaveSyncConfig loading={loading} error={error} onSubmit={handleSubmit}/>
};

