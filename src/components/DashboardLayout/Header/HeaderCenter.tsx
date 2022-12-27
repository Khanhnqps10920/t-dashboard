import searchIcon from '../../../assets/image/header-search-icon.svg'
const HeaderCenter = () => {
    return (
        <div className="header__center">
            <div className="search-icon">
                <img src={searchIcon} />
            </div>
            <input className='search-input' type="text" placeholder='Search' />
        </div>
    )
}

export default HeaderCenter