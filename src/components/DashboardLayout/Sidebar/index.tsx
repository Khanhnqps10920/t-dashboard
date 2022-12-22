import React from 'react'
import Logo from './Logo'
import './styles/Sidebar.scss'
import NavLinks from './NavLinks'
import DashBoardBanner from './DashBoardBanner'

type SidebarPropsType = {
    type: 'dashboard' | 'monitoring'
}

const Sidebar = ({ type = 'dashboard' }: SidebarPropsType) => {
    return (
        <div className='sidebar'>
            <Logo />
            <NavLinks />
            {type === 'dashboard' && <DashBoardBanner />}
        </div>
    )
}

export default Sidebar