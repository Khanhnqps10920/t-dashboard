import { useState } from 'react'
import LINK_DATA from './data/navlink-data'
import NavLink from './NavLink'
import './styles/NavLinks.scss'

const NavLinks = () => {
    const [activeLink, setActiveLink] = useState(0);

    const renderedLinks = LINK_DATA.map((link, index) => (
        <NavLink
            onClick={() => { setActiveLink(index) }}
            key={index}
            link={link}
            active={index === activeLink}
        />
    ))
    return (
        <ul className='nav-link__container'>{renderedLinks}</ul>
    )
}

export default NavLinks