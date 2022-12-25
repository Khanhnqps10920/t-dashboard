export type LINK_DATA_Type = {
    icon: JSX.Element,
    icon_active: JSX.Element,
    text: string
}
import dashboardIconActive from '../../../../assets/image/dashboard-icon-active.svg'
import dashboardIcon from '../../../../assets/image/dashboard-icon.svg'

const LINK_DATA: LINK_DATA_Type[] = [
    {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive} />,
        text: 'Dashboard'
    },
    {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    },
    {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    },
    {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    },
    {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    }, {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    }, {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    }, {
        icon: <img src={dashboardIcon} />,
        icon_active: <img src={dashboardIconActive}></img>,
        text: 'Dashboard'
    }
]

export default LINK_DATA