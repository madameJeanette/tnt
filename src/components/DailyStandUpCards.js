import React from 'react'


const CardList = (props) => {
    return (
        {/*<Card>
            <Card.Content
                header={props.Header}
                description={props.Description}
                meta={props.Label}
            />
        </Card>*/}
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
    
    items.map((item) => {
        item.members.map((member) => console.log(member))
        
        //console.log(item.member)
    })
    
    console.log(items)
    return(
        <div>
           {Carditems}
        </div>
    )
    
   
}

export default  DailyStandUpCards
