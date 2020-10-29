import React from 'react'
import './App.css'
//import '@fontawesome/fontawesome-free/css/all.min.css'
//import 'bootstrap-css-only/css/bootstrap.min.css'
//import 'mdbreact/dist/css/mdb.css'
import CounterContainer from './counter/CounterContainer'


// export const App = () => <div><Counter/></div>
// export default는 public 이라는 의미

const App = () => <div className="App">
        <CounterContainer/>
    </div>

export default App