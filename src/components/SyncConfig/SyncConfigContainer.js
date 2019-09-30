import React from 'react'
import {useMutation, useSuspenseQuery} from "react-fetching-library";
import {SaveSyncConfig} from "./SaveSyncConfig";

const getSyncConfigAction = {
    method: "GET",
    endpoint: "config/getSyncInfo",
    headers:
        {"Authorization": "Basic " + btoa("test:test")}
};

const saveSyncConfigAction = (formValues) => ({
    method: 'PUT',
    endpoint: "config/saveSyncInfo",
    body: formValues,
    headers:
        {"Authorization": "Basic " + btoa("test:test")}
});

export const SyncConfigContainer = () => {
    const getQuery = useSuspenseQuery(getSyncConfigAction);
    const saveMutation = useMutation(saveSyncConfigAction);

    const handleSubmit = async (formValues) => {
        const { error: mutateError } = await saveMutation.mutate(formValues);

        if (mutateError) {
            console.error(mutateError)
        }
        console.log(saveMutation.payload)
    };

    if (!getQuery.payload) {
        const tempPayload = {
            key: "",
            token: "",
            boards: []
        };

        //return <p>Loading</p>
        return <SaveSyncConfig loading={getQuery.loading} error={getQuery.error} settings={tempPayload} onSubmit={handleSubmit} />
    } else {
        console.log(getQuery.payload);

        return <SaveSyncConfig loading={getQuery.loading} error={getQuery.error} settings={getQuery.payload} onSubmit={handleSubmit} />
    }
};

