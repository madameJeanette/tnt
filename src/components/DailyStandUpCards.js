import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import _ from 'lodash'


const CardList = (props) => {
    var memberNames = ""
    for (let i = 0; i < props.members.length; i++) {
        const member = props.members[i];

        if (i === props.members.length - 1) {
            memberNames += member.fullName
        } else {
            memberNames += member.fullName + ", "
        }
        
    }

    var labelNames = ""
    props.labels.forEach(label => {
        labelNames +=  label.name + " "
    });

    return (
        <Card href={props.cardURl}> 
            <Card.Content
                header={props.Header}
                description={memberNames}
                meta={labelNames}
            />
        </Card>
    )
}

const DailyStandUpCards = ({ loading, error, items, onReload }) => {


    // items.forEach(item => {
    //     console.log(item.name)
    //     item.title = item.name
    //     item.labels.forEach(label => {
    //         console.log(label)
        
    //     })
    //     item.members.forEach(member => {
    //         console.log(member)
    //     })

    // })
    const Carditems = items.map((item) =>
        <CardList key={item.id} Header={item.name} members={item.members} labels={item.labels} cardURl={item.url}/>
    )
    
    
    const x = items.map((item) =>
        item.labels.filter((v, i) => item.labels.indexOf(v) === i))
    
    console.log(x)
    
    //console.log(items)
    return(
        <div>
           {Carditems}
        </div>
    )
    
   
}

export default  DailyStandUpCards
