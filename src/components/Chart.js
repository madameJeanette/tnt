import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2';


class Chart extends Component {
   constructor(props){
       super(props);
       this.state = {
           chartData:{
               labels: ['Doing', 'Testing', 'Done'],
            datasets:[
                {
                    label: 'Cards',
                    data:[
                        25,
                        13,
                        45,
                        100
                    ],

                    backgroundColor:[
                        'rgb(255, 255, 153)', 'rgb(255, 194, 153)', 'rgb(255, 153, 153)'
                    ],
                    borderWidth:1,
                    borderColor:'#000000',

                    
                }
            ]   
           }
       }
    }

    static defaultProps = {
           //was last here
    }
   
   
    render(){
        return(
            <div className="chart">
               <HorizontalBar
               
                 data={this.state.chartData}
                 width= {'100'} 
                 height={'50'} 
                 options={{
                    
                     title:{
                         display: true,
                         text: 'Cards processed this week',
                         fontSize: 25
                     
                     },

                    legend:{
                        display:true,
                        position: 'right'
                    }
                  
              
                   }}
/>
            </div>
        )
    }
}




export default Chart
