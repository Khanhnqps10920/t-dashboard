import './styles/Stats.scss'

const Stats = () => {
    return (
        <div className="stats">
            <div className="tabs">
                <span className='tab active'>ALL</span>
                <span className='tab'>1M</span>
                <span className='tab'>6M</span>
                <span className='tab'>1Y</span>
                <span className='tab'>YTD</span>
            </div>
            <div className="chart">
                CHART
            </div>
        </div>
    )
}

export default Stats