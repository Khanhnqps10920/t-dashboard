import TabCard from '../TabCard/TabCard'
import "./styles/Stats.scss"
const Stats = () => {
    return (
        <TabCard>
            <div>
                    <div>
                        <p className='title'>Market Overview</p>
                        <p className='small green'>7.7777,77.7(77%)</p>
                    </div>
                    <div className="tabs">
                        <span className='tabs__tab active'>ALL</span>
                        <span className='tabs__tab'>1M</span>
                        <span className='tabs__tab'>6M</span>
                        <span className='tabs__tab'>1Y</span>
                        <span className='tabs__tab'>YTD</span>
                    </div>
                <div className='chart'>
                    CHART
                </div>
            </div>
        </TabCard>
    )
}

export default Stats