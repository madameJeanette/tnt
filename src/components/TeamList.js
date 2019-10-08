import React, {useState} from 'react'
import { Accordion, Icon, Container } from 'semantic-ui-react'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'

const AccordionItem = (props) => {
  const [state , setState] = useState({ activeIndex: 1 })

  var handleClick = (e, titleProps) => {
    const { index } = titleProps
    const {activeIndex} = state
    const newIndex = activeIndex === index ? 1 : index

     setState({ activeIndex: newIndex })
  }
  const {activeIndex} = state

  return (
    <Container className="accordionContainer">
  <Accordion fluid>
      <Accordion.Title
        active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <h4 className="titleAccordion"><Icon name='dropdown' />
         {props.name}</h4>
          
        </Accordion.Title>
      <Accordion.Content className="accordionContent" active={activeIndex === 0}
      >
        <Container><PersonalActivityContainer id={props.id}/></Container>
        </Accordion.Content>
      </Accordion>
      </Container>
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