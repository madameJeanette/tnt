import React, {useState} from 'react'
import DailyStandUpContainer from '../components/dailyStandUp/DailyStandUpContainer'
import DailyCardContainer from '../components/dailyStandUp/DailyCardContainer'
import TeamListContainer from '../components/teamList/TeamListContainer'
import PersonalActivityContainer from '../components/personalActivity/PersonalActivityContainer'
import TeamContainer from '../components/team/TeamContainer'
import { Button } from 'semantic-ui-react'



export default function DailyStandUp() {
    const [state, setState] = useState({
        on: false,
       })

    const onClickToggle = () => {
        setState({on: !state.on})
    }

    return (
        <div>
            <Button onClick={onClickToggle}>SwitchBoard</Button>
            {state.on && (
                <TeamContainer boardId="qDAFPals" boardName="Nauti & Nice"/>
            )}
            {!state.on && (
                <TeamContainer boardId="xfg9qoms" boardName="Unsinkables"/>
            )}                
                {/* <PersonalActivityContainer /> */}
            
        </div>
    )
}
