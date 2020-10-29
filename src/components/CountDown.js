import React from 'react'

const CounterDown = ({count, tick, reset}) => {
    // 1000m/s 마다 하나씩 찍어주는 것
    if(count) setTimeout(()=> tick(), 1000)
    return (count) ?
    <h1>{count}</h1>:
    <div onClick={ () => reset(10) } >
        <span>축하합니다</span>
        <span>리셋</span>
    </div>
    
}

export default CounterDown