import React from 'react'
import './styles/DashboardBanner.scss'


const DashBoardBanner = () => {
    return (
        <div className='dashboard-banner'>
            <div className="icon__wrapper">
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M34.85 18.5331C34.85 26.6831 28.9333 34.3165 20.85 36.5498C20.3 36.6998 19.7 36.6998 19.15 36.5498C11.0666 34.3165 5.14996 26.6831 5.14996 18.5331V11.2165C5.14996 9.84983 6.18332 8.29984 7.46665 7.78317L16.7499 3.98317C18.8333 3.13317 21.1833 3.13317 23.2666 3.98317L32.55 7.78317C33.8166 8.29984 34.8667 9.84983 34.8667 11.2165L34.85 18.5331Z" fill="#00DEA3" />
                    <path d="M24.1666 17.4998C24.1666 15.1998 22.3 13.3332 20 13.3332C17.7 13.3332 15.8333 15.1998 15.8333 17.4998C15.8333 19.3665 17.0666 20.9165 18.75 21.4498V25.8332C18.75 26.5165 19.3166 27.0832 20 27.0832C20.6833 27.0832 21.25 26.5165 21.25 25.8332V21.4498C22.9333 20.9165 24.1666 19.3665 24.1666 17.4998Z" fill="#00DEA3" />
                </svg>
            </div>
            <span className='safe-text'>Keep you safe!</span>
            <span className='security-text'>Update your security password,<br />keep your account safe!</span>
            <span className='privacy-text'>Update Privacy</span>
        </div>
    )
}

export default DashBoardBanner