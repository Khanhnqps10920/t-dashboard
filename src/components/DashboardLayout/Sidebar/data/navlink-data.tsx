export type LINK_DATA_Type = {
    icon: JSX.Element,
    text: string,
    path: string
}
import { pages } from '../../../../utils/constant'
import { HomeOutlined, MailOutlined, FireOutlined, TeamOutlined } from '@ant-design/icons';
const LINK_DATA: LINK_DATA_Type[] = [
    {
        icon: <HomeOutlined />,
        text: 'Home',
        path: pages.DASHBOARD,
    },
    {
        icon: <MailOutlined />,
        text: 'Categories',
        path: pages.CATEGORIES,
    },
    {
        icon: <TeamOutlined />,
        text: 'Products',
        path: pages.PRODUCTS,
    },
    {
        icon: <FireOutlined />,
        text: 'Oders',
        path: pages.ODERS,
    },
]

export default LINK_DATA