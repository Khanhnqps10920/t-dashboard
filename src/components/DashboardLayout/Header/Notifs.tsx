import React, { useContext } from 'react'
import './styles/Notifs.scss'
import { DashBoardContext } from '../DashboardLayout'
import notifsIcon from '../../../assets/image/notifs-icon.svg'
type NotifsPropsType = {
    active?: boolean
}
const Notifs = ({ active = false }: NotifsPropsType) => {
    const { type } = useContext(DashBoardContext)
    return (
        <div className={`notifs ${type}`}>
            <div className="notifs__wrapper">
                <img src={notifsIcon} />
                {active && <div className="notifs__active-icon"></div>}
            </div>
        </div>
    )
}

export default Notifs