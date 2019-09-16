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
        };

        this.handleBoardChange = this.handleBoardChange.bind(this);
    }

    handleBoardChange(event, index) {
        const { key, value } = event.target;
        var boards = [...this.state.boards];
        boards[index] = {
            [key]: value
        };
        this.setState({boards});
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

                {boards.map((value, index) => (
                    <div className="sync-settings-board">

                        <label htmlFor="key">Board ID</label>
                        <input type="text" className="form-control" name="key" value={value.id} onChange={(e) => this.handleBoardChange(e, index)} />

                        <label htmlFor="key">Done list ID</label>
                        <input type="text" className="form-control" name="key" value={value.doneListId} onChange={(e) => this.handleBoardChange(e, index)} />

                        <label htmlFor="key">Doing list ID</label>
                        <input type="text" className="form-control" name="key" value={value.doingListId} onChange={(e) => this.handleBoardChange(e, index)} />

                        <label htmlFor="key">Testing list ID</label>
                        <input type="text" className="form-control" name="key" value={value.testingListId} onChange={(e) => this.handleBoardChange(e, index)} />

                        <label htmlFor="key">Reviewing list ID</label>
                        <input type="text" className="form-control" name="key" value={value.reviewingListId} onChange={(e) => this.handleBoardChange(e, index)} />
                    </div>
                ))}


            </div>
        )
    }
}

export default SyncSettings