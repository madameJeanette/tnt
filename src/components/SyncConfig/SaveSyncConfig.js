import React, { useState } from 'react';

export const SaveSyncConfig = ({settings, loading, error, onSubmit}) => {
    const [key, setKey] = useState(settings.key);
    const [token, setToken] = useState(settings.token);
    const [boards, setBoards] = useState(settings.boards);

    settings.key = key;
    settings.token = token;
    settings.boards = boards;

    function changeBoardItem(event, index) {
        const { name, value } = event.target;
        let tempBoards = boards;
        let board = tempBoards[index];
        board[name] = value;
        tempBoards[index] = board;
        setBoards([
            ...tempBoards
        ])
    }

    return (
        <div>
            {loading &&
            <p>Loading Data</p>
            }
            {error &&
            <p>ERROR!</p>
            }
            <form >
                <div className = 'settingsStyle'>
                    <div>
                        <label htmlFor="key">Trello Key</label>
                        <input type="text" id="key" name="key" value={key} onChange={event => setKey(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="token">Trello OAuth Token</label>
                        <input type="text" id="token" name="token" value={token} onChange={event => setToken(event.target.value)} />
                    </div>
                    {boards && boards.map((value, index) => (
                        <div key={index} className="sync-settings-board">
                            <label htmlFor={"id-"+index}>Board ID</label>
                            <input type="text" className="form-control" id={"id-"+index} name={"id"} value={value.id} onChange={event => changeBoardItem(event, index)} />
                    </div>
                    ))}
                </div>
                <button onClick={e => {
                        e.preventDefault();
                        onSubmit(settings)
                    }
                }>Submit</button>
            </form>
        </div>
    )
};