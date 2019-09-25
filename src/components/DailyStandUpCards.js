import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const DailyStandUpCards = ({ loading, error, items, onReload }) => {
    items.forEach(item => {
        console.log(item)   
        item.labels.forEach(label => {
             console.log(label)
        })
        item.members.forEach(member => {
            console.log(member)
        })
     })
    console.log(items)
    return (
        <Card>
            
                

                        <Card.Content header={items[94].id} />,
                        <Card.Content description={items[94].name} />
                        <Card.Content extra>
                            <Icon name='user' />{items[94].members[0].fullName}
                        </Card.Content>
                        <Card.Content extra>
                <Icon name='user' />
                        </Card.Content>      
            
            </Card>
    )
}

export default  DailyStandUpCards
