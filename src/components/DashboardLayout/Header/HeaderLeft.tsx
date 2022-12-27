import { useEffect, useState } from 'react'

import getDate from './utils'

const HeaderLeft = () => {

    const [date, setDate] = useState(getDate());
    useEffect(() => {
        const updateTime = setInterval(() => { setDate(getDate()) }, 2000)
        return () => {
            clearInterval(updateTime)
        }
    }, [])
    // name will be retrieved from context api
    const name = 'Kruluz Utsman'
    return (
        <div className="header__left">
            <div className="hello">Hello {name}</div>
            <div className="date">{date}</div>
        </div>
    )
}

export default HeaderLeft