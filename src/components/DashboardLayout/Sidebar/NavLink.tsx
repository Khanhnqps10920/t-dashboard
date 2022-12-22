import React from 'react'
import { LINK_DATA_Type } from './data/navlink-data'
type NavLinkPropType = {
    link: LINK_DATA_Type,
    active?: boolean,
    onClick: React.MouseEventHandler<HTMLLIElement>
}

/*
To be implemented: Routes
*/
const NavLink = ({ link, active = false, onClick }: NavLinkPropType) => {
    return (
        <li onClick={onClick} className={`nav-link ${active && 'active'}`}>
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