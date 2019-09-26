import React from 'react'
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'
import TeamListContainer from '../components/teamList/TeamListContainer'

export default function DailyStandUp() {
    return (
        <div>
            <DailyStandUpContainer />
            <DailyCardContainer />
            <TeamListContainer />
        </div>
    )
}
