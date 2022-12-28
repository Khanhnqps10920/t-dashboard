export type LINK_DATA_Type = {
    icon: JSX.Element,
    icon_active: JSX.Element,
    text: string,
    path: string
}
import { pages } from '../../../../utils/constant'
import { FaHome } from "react-icons/fa";
import { AiFillRead, AiOutlineTeam, AiTwotoneFire } from "react-icons/ai";
const LINK_DATA: LINK_DATA_Type[] = [
    {
        icon: <FaHome></FaHome>,
        icon_active: <FaHome></FaHome>,
        text: 'Home',
        path: pages.DASHBOARD,
    },
    {
        icon: <AiFillRead></AiFillRead>,
        icon_active: <AiFillRead></AiFillRead>,
        text: 'Categories',
        path: pages.CATEGORIES,
    },
    {
        icon: <AiOutlineTeam></AiOutlineTeam>,
        icon_active: <AiOutlineTeam></AiOutlineTeam>,
        text: 'Product',
        path: pages.PRODUCT,
    },
    {
        icon: <AiTwotoneFire></AiTwotoneFire>,
        icon_active: <AiTwotoneFire></AiTwotoneFire>,
        text: 'Oder',
        path: pages.ODER,
    },
]

export default LINK_DATA