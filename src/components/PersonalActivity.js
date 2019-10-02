import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardWithPersonalActivity = (props) => {
    var members = ""
    var listsBefore = ""
    var listsAfter = ""
    

    if (props.Header === "addMemberToCard") {
        members += props.data.member.id
    }
    if (props.Header === "updateCard") {
        if (props.data.listBefore !== undefined) {
            listsBefore += "List before: " + props.data.listBefore.name
            listsAfter += "List After: " + props.data.listAfter.name
        }
        
        
    }

    return (
        <Card>
            <Card.Content
                header={props.Header}
                 description={props.data.card.name}
                 //meta={props.date}
            />
            <Card.Content extra>
                {members}
                {listsBefore}<br />
                {listsAfter}
            </Card.Content>
        </Card>
    )
}


const PersonalActivity = ({ items }) => {
     const CardWithPersonalActivityItems = items.map((item) =>
         <CardWithPersonalActivity key={item.id} Header={item.type} data={item.data} cards={item.data.card} cardURl={item.url} />
    )
    //console.log(item.id,item.type,item.data,item.data.card)
    console.log(items)
    return (
    <div>
            {CardWithPersonalActivityItems}
    </div>
    )
}

export default PersonalActivity