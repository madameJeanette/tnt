import React, {Component} from 'react';

class SyncSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "Hallo",
            token: "Trello OAuth Token",
            boards: [
                {
                    id: "Some board ID",
                    doneListId: "My done list ID",
                    doingListId: "The doing list ID",
                    testingListId: "Testing list ID",
                    reviewingListId: "The gandalf ID"
                }
            ]
        }
    }

    render() {
        const { key, token, boards } = this.state;
        return (
            <div className="sync-settings">
                <h2>Sync Settings</h2>

                <label htmlFor="key">Trello Key</label>
                <input type="text" className="form-control" name="key" value={key} onChange={(e) => this.setState({ key: e.target.value})} />

                <label htmlFor="key">Trello OAuth Token</label>
                <input type="text" className="form-control" name="key" value={token} onChange={(e) => this.setState({ token: e.target.value})} />

                {boards.map((value, key) => (
                    <div className="sync-settings-board">

                        <label htmlFor="key">Board ID</label>
                        <input type="text" className="form-control" name="key" value={token} onChange={(e) => this.setState({ token : e.target.value})} />

                        <label htmlFor="key">Done list Id</label>
                        <input type="text" className="form-control" name="key" value={token} onChange={(e) => this.setState({ token: e.target.value})} />

                        <label htmlFor="key">Trello OAuth Token</label>
                        <input type="text" className="form-control" name="key" value={token} onChange={(e) => this.setState({ token: e.target.value})} />

                        <label htmlFor="key">Trello OAuth Token</label>
                        <input type="text" className="form-control" name="key" value={token} onChange={(e) => this.setState({ token: e.target.value})} />
                    </div>
                ))}


            </div>
        )
    }
}

export default SyncSettings