import React from 'react'
import './styles/DashboardBanner.scss'
import dashboardBannerIcon from '../../../assets/image/dashboard-banner-icon.svg'

const DashBoardBanner = () => {
    return (
        <div className='dashboard-banner'>
            <div className="icon__wrapper">
                <div className="icon__img__wrapper">
                    <img src={dashboardBannerIcon} />
                </div>
            </div>
            <span className='safe-text'>Keep you safe!</span>
            <span className='security-text'>Update your security password,<br />keep your account safe!</span>
            <span className='privacy-text'>Update Privacy</span>
        </div>
    )
}

export default DashBoardBanner