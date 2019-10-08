import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardWithPersonalActivity = (props) => {
    var members = ""
    var listsBefore = ""
    var listsAfter = ""
    var cardName = ""
    
    console.log("v1.0")

    if (props.Header === "addMemberToCard") {
        members += props.data.member.id
    }
    if (props.Header === "updateCard") {
        if (props.data.listBefore !== undefined) {
            listsBefore += "List before: " + props.data.listBefore.name
            listsAfter += "List After: " + props.data.listAfter.name
        } 
    }
    if (props.Header === "updateList" || "createList") {
        if (props.data) {
            cardName = "empty"   
       }
    }
    if (props.cards) {
        cardName = props.data.card.name
    }

    return (
        <Card>
            <Card.Content
               
                header={props.Header}
                description={cardName}
                 //meta={props.date}
            />
            <Card.Content extra
             className="accordionContent">
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

    return (
    <div className="personalActivity">
            {CardWithPersonalActivityItems}
    </div>
    )
}

export default PersonalActivity