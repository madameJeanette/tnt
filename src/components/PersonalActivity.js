import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardWithPersonalActivity = (props) => {
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


const PersonalActivity = ({ items }) => {
    // const CardWithPersonalActivityItems = items.map((item) =>
    // Object.values(item.data).map((data) => console.log(data.id)
    // //     item.labels.map((label)=>
    //         <CardWithPersonalActivity key={item.id} Header={item.name} MemberId={member.id} Description={member.fullName} LabelId={label.id} Label={label.name} />
//)
// )
// )
//       console.log(items)
    // });
    return (
    <div>
            {/* {CardWithPersonalActivityItems} */}
    </div>
    )
}

export default PersonalActivity