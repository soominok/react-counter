import React from 'react'
import CounterDown from './CountDown'

// export const Counter = ({number, onIncrease, onDecrease}) => <>카운트</>
// APP.js와 <div>가 겹쳐있을 때 <>로 써줄 수 있음

const Counter = () => <>
            <CounterDown count={0} reset={10} tick={1000}/>
        </>


export default Counter