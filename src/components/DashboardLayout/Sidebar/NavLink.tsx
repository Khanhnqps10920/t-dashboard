import React, { useContext } from 'react'
import { LINK_DATA_Type } from './data/navlink-data'
import { DashBoardContext } from '../DashboardLayout'

type NavLinkPropType = {
    link: LINK_DATA_Type,
    active?: boolean,
    onClick: React.MouseEventHandler<HTMLLIElement>
}


/*
To be implemented: Routes
*/
const NavLink = ({ link, active = false, onClick }: NavLinkPropType) => {
    const { type } = useContext(DashBoardContext)
    return (
        <li onClick={onClick} className={`nav-link ${active && 'active'} ${type}`}>
            <div className="nav-link__icon__wrapper">
                {active ? link.icon_active : link.icon}
            </div>
            <span className='nav-link__text'>
                {link.text}
            </span>
            {active && <div className="active-dot"></div>}
        </li>
    )
}

export default NavLink