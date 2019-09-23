import React, {Component} from 'react'
import axios from 'axios'

export class StatsApi extends Component {
    state = {
        boards: [],
    };
    config = {
        // headers: [
        //     {'startDate': '2019-09-10'},
        //     { 'endDate': '2019-09-22' },
        //     { 'key': '62f0297bf821e374ae28a1fbab5ef9fb' },
        //     { 'token': 'dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5' },
        //     {'doneListId':'5d7625083f2c8f263373a840'}
                  
        // ],
        
        headers:
        {
            'startDate': new Date().toDateString(),
            'endDate': '2019-09-22',
            'key': '62f0297bf821e374ae28a1fbab5ef9fb',
            'token': 'dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',
            'doneListId': '5d7625083f2c8f263373a840'
                  
        }
      }
    componentDidMount() {
                axios.get('http://trelloextension.eu-west-1.elasticbeanstalk.com/board/qDAFPals/teamstatistics', {
                        params: {
                            'startDate': '2019-09-10',
                            'endDate': '2019-09-22',
                        
                    }
            })
            .then(res => {
                console.log(res.data)
                

        //         this.setState({ boards: [res.data.value] })
        })
        console.log(this.config)
        axios.defaults.headers = {
        
            // 'startDate': '2019-09-10',
            // 'endDate': '2019-09-22',
            // 'key': '62f0297bf821e374ae28a1fbab5ef9fb',
            // 'token': 'dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',
            // 'doneListId': '5d7625083f2c8f263373a840',
            // 'Content-Type': 'application/json',
            // 'responseType': 'json'
        }
              
        axios.get('http://trelloextension.eu-west-1.elasticbeanstalk.com/board/qDAFPals/burndownchartinfo', {
            params: {
                'startDate': '2019-09-10',
                'endDate': '2019-09-22',
        }
   })
        .then(res => {
        return res.data
        })
                                axios.get('http://trelloextension.eu-west-1.elasticbeanstalk.com/board/qDAFPals/leaderboard', {
                                    params: {
                                        'key': '62f0297bf821e374ae28a1fbab5ef9fb',
                        'token': 'dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5',
                        'doingListId': '5411bfbbc1a47d1d609a572a',
                        'doneListId': '5d7625083f2c8f263373a840',
                        'testingListId': '5411bfbbc1a47d1d609a572b',
                        'startDate': '2019-09-09',
                        'endDate': '2019-09-22',
                        'reviewingListId': '5cd00b0c56c28b669cf206c5'
                                    }
                                })
                                .then(res => {
                                return console.log(res.data)
                            const chartInfo = res.data;
                            this.setState({ chartInfo });
                            })
    }
    render() {
        return (
           
            <div>
                <ul>{this.state.boards.map(board => <li key={board.boardId}> {board.boardName}</li>)}</ul>
                <ul>{this.state.boards.map(board => console.log(board))}</ul>
                <ul>{this.state.boards.map((board) => <li key={board.boardId}> {board.listsStatistics }</li>)}</ul>
            </div>
        )
    }
}

export default StatsApi