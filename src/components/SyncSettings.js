import React, {Component} from 'react';

class SyncSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "Trello Key",
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
        return (
            <div className="sync-settings">
                <p>test</p>
            </div>
        )
    }
}

export default SyncSettings