import React, { useContext } from 'react'
import { LINK_DATA_Type } from './data/navlink-data'
import { DashBoardContext } from '../DashboardLayout'
import { Link } from 'react-router-dom'

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
        <Link to={link.path}>
            <li onClick={onClick} className={`nav-link ${active && 'active'} ${type}`}>
                <div className="nav-link__icon__wrapper">
                    {link.icon}
                </div>

                <span className='nav-link__text'>
                    {link.text}
                </span>

                {active && <div className="active-dot"></div>}
            </li>
        </Link>
    )
}

export default NavLink