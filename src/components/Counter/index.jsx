import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
    const counter = useSelector(state => state.count.value)
    const dispatch = useDispatch();

    const handleIncrease = () => {
        const action = increase(22)
        console.log(action);
        dispatch(action)
    }

    const handleDecrease = () => {
        const action = decrease()
        console.log(action);
        dispatch(action)
    }

    return (
        <div>
            Couter: {counter}
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
}

export default CounterFeature;