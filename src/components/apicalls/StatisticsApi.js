import React from 'react'
import axios from 'axios'

function componentDidMount() {
    axios.get('http://trelloextension.eu-west-1.elasticbeanstalk.com/board/qDAFPals/teamstatistics', {
        params: {
            
            
        }
    })
        .then(res => {
            return res.data
           //this.state().boards = res.data.value
        })
}

export default function StatisticsApi() {
    return (
        <div>
            {componentDidMount()}
        </div>
        
    );
}
