import React from 'react';
import useClock from '../../hooks/useClock/useClock';
import './index.scss'

function Clock(props) {
    const { time } = useClock()
    return (
        <div className='clock'>
            {time}
        </div>
    );
}

export default Clock;