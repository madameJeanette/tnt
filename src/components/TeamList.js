import React, {useState} from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'

const AccordionItem = (props) => {
  const [state , setState] = useState({ activeIndex: 1 })

  var handleClick = (e, titleProps) => {
    const { index } = titleProps
    const {activeIndex} = state
    const newIndex = activeIndex === index ? 1 : index
console.log(titleProps)
     setState({ activeIndex: newIndex })
  }
  const {activeIndex} = state
console.log(activeIndex)
  return(
  <Accordion>
      <Accordion.Title
        active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          {props.name} {props.id}
        </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}
      >
        <PersonalActivityContainer id={props.id}/>
        <p>
          hallo
       </p>
        </Accordion.Content>
    </Accordion>
  )}

const TeamList = ({ items }) => {
  const accordion = items.map((member) => <AccordionItem key={member.id} id={member.id} name={member.fullName} /> )
    
    //console.log(items)
    
    return (
      <div className="teamList">
        {accordion}
        </div>
    )
}

export default TeamList