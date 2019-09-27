import React from 'react'
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'
import TeamListContainer from '../components/teamList/TeamListContainer'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'

export default function DailyStandUp() {
    return (
        <div>
            <DailyStandUpContainer />
            <DailyCardContainer />
            <TeamListContainer />
            <PersonalActivityContainer />
        </div>
    )
}
