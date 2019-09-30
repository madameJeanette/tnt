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
            item.labels.map((label)=>
                <CardList key={item.id} Header={item.name} MemberId={member.id} Description={member.fullName} LabelId={label.id} Label={label.name} />
    )))
    
    // items.map((item) => 
    //     item.members.map((member) =>
    //         _.labels.join((label, '~') =>
    //         console.log([item.id, item.name, member.id, member.fullName, label.id, label.name])
        
    //     )))
    
    console.log(items)
    return(
        <div>
           {Carditems}
        </div>
    )
    
   
}

export default  DailyStandUpCards
