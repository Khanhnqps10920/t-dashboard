import React, { useContext } from 'react'
import Logo from './Logo'
import './styles/Sidebar.scss'
import NavLinks from './NavLinks'
import DashBoardBanner from './DashBoardBanner'
import { DashBoardContext } from '../DashboardLayout'


const Sidebar = () => {
    const { type } = useContext(DashBoardContext);
    return (
        <div className={`sidebar ${type}`}>
            <Logo />
            <NavLinks />
            {type === 'dashboard' && <DashBoardBanner />}
        </div>
    )
}

export default Sidebar