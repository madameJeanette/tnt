import React from 'react'
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'
import TeamListContainer from '../components/teamList/TeamListContainer'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'
import TeamContainer from '../components/team/TeamContainer'





export default function TeamStandUp({ boardId, boardName }) {
    console.log(boardId)
    return (
        <div>
            <div>
                {boardName}
            </div>
                <DailyStandUpContainer boardId={boardId} />
                <DailyCardContainer boardId={boardId} />
                <TeamListContainer boardId={boardId} />
        </div>
    )
}
