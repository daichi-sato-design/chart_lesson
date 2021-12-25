import React from 'react'
import './App.css'

import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'

function App() {
  return (
    <div className="App">
      <div className="App__wrap">
        <LinePlot />
        <PiePlot />
        <BarPlot />
      </div>
    </div>
  )
}

export default App
