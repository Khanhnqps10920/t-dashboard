
const HeaderCenter = () => {
    return (
        <div className="header__center">
            <div className="search-icon">
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#AEB6CF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 22L20 20" stroke="#AEB6CF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <input className='search-input' type="text" placeholder='Search' />
        </div>
    )
}

export default HeaderCenter