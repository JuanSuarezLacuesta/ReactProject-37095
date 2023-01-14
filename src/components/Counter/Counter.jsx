import { useEffect } from 'react'
import { useState } from 'react'

import gFetch from '../../helpers/gFetch'


function Counter({ end = 5, initial = 1, onAdd }) {

    const [counter, setCounter] = useState(initial)

    const handleOnAdd = () => onAdd(counter)


    const handleCountPlus = () => {
        if (counter < end) {
            setCounter(counter + 1)
        }
    }

    const handleCountMinus = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button className='  counterBtn' onClick={handleCountMinus}>-</button>
            {counter}
            <button className=' counterBtn' onClick={handleCountPlus}>+</button>
            <button className=' counterBtn' onClick={handleOnAdd}>add to cart</button>
        </div>
    )
}

export default Counter