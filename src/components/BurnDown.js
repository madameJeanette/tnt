import React from 'react';

import axios from 'axios';


export default class BurnDown extends React.Component {
  state = {
    chartInfo: []
  }
  config = {
    headers: [
              {'startDate': '2019-09-10'},
              {'endDate': '2019-09-22'},
              {
                'Access-Control-Allow-Origin': '*',
              },
              {
                'Content-Type': 'Application/Json' 
              }
            ]
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/board/qDAFPals/burndownchartinfo`, this.config)
      .then(res => {
        console.log(res)
        const chartInfo = res.data;
        this.setState({ chartInfo });
      })
  }

  render() {
    return (
      <p>  { this.state.chartInfo} </p>
   
    )
  }
}
