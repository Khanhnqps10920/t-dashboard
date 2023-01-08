import TabCard from './Card'
const Stats = () => {
    return (
        <TabCard>
            <div>
                    <div>
                        <p className='tabcard__title'>Market Overview</p>
                        <p className='tabcard__small green'>7.7777,77.7(77%)</p>
                    </div>
                    <div className="tabcard__tabs">
                        <span className='tabcard__tabs__tab active'>ALL</span>
                        <span className='tabcard__tabs__tab'>1M</span>
                        <span className='tabcard__tabs__tab'>6M</span>
                        <span className='tabcard__tabs__tab'>1Y</span>
                        <span className='tabcard__tabs__tab'>YTD</span>
                    </div>
                <div className='tabcard__chart'>
                    CHART
                </div>
            </div>
        </TabCard>
    )
}

export default Stats