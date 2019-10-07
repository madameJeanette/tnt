import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardWithPersonalActivity = (props) => {
    var members = ""
    var listsBefore = ""
    var listsAfter = ""
    
    // console.log(props.data)

    if (props.Header === "addMemberToCard") {
        members += props.data.member.id
    }
    if (props.Header === "updateCard") {
        if (props.data.listBefore !== undefined) {
            listsBefore += "List before: " + props.data.listBefore.name
            listsAfter += "List After: " + props.data.listAfter.name
        } 
    }
    if (props.Header === "updateList") {
        if (props.data) {
            var listUpdate = "empty"   
       }
    }

    return (
        <Card>
            <Card.Content
               
                header={props.Header}
                description={listUpdate || props.data.card.name}
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