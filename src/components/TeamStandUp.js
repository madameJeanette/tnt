import React from 'react'
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'
import TeamListContainer from '../components/teamList/TeamListContainer'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'
import TeamContainer from '../components/team/TeamContainer'
import { Container } from 'semantic-ui-react'





export default function TeamStandUp({ boardId, boardName }) {
    console.log(boardId)
    return (
        <div>
            <div> 
               <h1>{boardName} </h1>
            </div>
            <div>
            <DailyStandUpContainer boardId={boardId} />
            <DailyCardContainer boardId={boardId} />
            </div>
            <Container>
            <TeamListContainer boardId={boardId} />
            </Container> 
        </div>
    )
}
