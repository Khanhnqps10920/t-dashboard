import { useContext } from 'react';
import { DashBoardContext } from '../DashboardLayout';
import './styles/Header.scss'
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';


const Header = () => {
    const { type } = useContext(DashBoardContext);
    return (
        <div className={`header ${type}`}>
            <HeaderLeft />
            {type === 'dashboard' && <HeaderCenter />}
            <HeaderRight />
        </div>
    )
}

export default Header