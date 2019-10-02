import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import _ from 'lodash'


const CardList = (props) => {
    return (
        <Card>
            <Card.Content
                header={props.Header}
                description={props.Description}
                meta={props.Label}
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
        item.members.map((member) =>
            item.labels.map((label) =>
                <CardList key={item.id} Header={item.name} MemberId={member.id} Description={member.fullName} LabelId={label.id} Label={label.name}/>
    )))
    
    
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
