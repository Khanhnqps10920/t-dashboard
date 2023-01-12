import './styles/Stats.scss'

import LineChart from './Chart/LineChart'

const Stats = () => {
    const turnOnActive = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>{
        document.querySelector('.tab.active')?.classList.remove('active');
        event.currentTarget.classList.add('active');
    }

    return (
        <div className="stats">
            <div className="tabs">
                <span className='tab active' onClick={event=>{turnOnActive(event)}}>ALL</span>
                <span className='tab' onClick={event=>{turnOnActive(event)}}>1M</span>
                <span className='tab' onClick={event=>{turnOnActive(event)}}>6M</span>
                <span className='tab' onClick={event=>{turnOnActive(event)}}>1Y</span>
                <span className='tab' onClick={event=>{turnOnActive(event)}}>YTD</span>
            </div>
            <div className="chart">
                <LineChart />
            </div>
        </div>
    )
}

export default Stats