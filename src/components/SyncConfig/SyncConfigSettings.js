import React, { useState } from 'react';
import {SaveSyncConfigContainer} from "./SyncConfigContainer";

export const SyncConfigSettings = ({loading, error, settings}) => {
    const keyState = useState(settings.key);
    const tokenState = useState(settings.token);
    const boardsState = useState(settings.boards);

    settings.key = keyState[0];
    settings.token = tokenState[0];
    settings.boards = boardsState[0];

    return (
        <div className="sync-settings">
            {loading &&
                <p>Loading Data</p>
            }
            {error &&
                <p>ERROR!</p>
            }
            <form>
                <h2>Sync Settings</h2>
                <div>
                    <div>
                        <label htmlFor="key">Trello Key</label>
                        <input type="text" name="key" value={keyState[0]} onChange={event => keyState[1](event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="token">Trello OAuth Token</label>
                        <input type="text" name="token" value={tokenState[0]} onChange={event => tokenState[1](event.target.value)} />
                    </div>
                    {boardsState[0] && boardsState[0].map((value, index) => (
                        <div className="sync-settings-board">
                            <div>
                                <label htmlFor={"id-"+index}>Board ID</label>
                                <input type="text" className="form-control" name={"id-"+index} value={value.id} />
                            </div>
                            <div>
                                <label htmlFor={"doneListId-"+index}>Done list ID</label>
                                <input type="text" className="form-control" name={"doneListId-"+index} value={value.doneListId} />
                            </div>
                            <div>
                                <label htmlFor={"doingListId-"+index}>Doing list ID</label>
                                <input type="text" className="form-control" name={"doingListId-"+index} value={value.doingListId} />
                            </div>
                            <div>
                                <label htmlFor={index + "testingListId"}>Testing list ID</label>
                                <input type="text" className="form-control" name={index + "testingListId"} value={value.testingListId} />
                            </div>
                            <div>
                                <label htmlFor={index + "reviewingListId"}>Reviewing list ID</label>
                                <input type="text" className="form-control" name={index + "reviewingListId"} value={value.reviewingListId} />
                            </div>
                        </div>
                    ))}
                </div>
                <SaveSyncConfigContainer />
            </form>
        </div>
    )
};