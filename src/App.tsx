import React from 'react'
import './App.css'

import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'
import RaderPlot from './components/RaderPlot'
import BubblePlot from './components/BubblePlot'

function App() {
  return (
    <div className="App">
      <div className="App__wrap">
        <LinePlot />
        <PiePlot />
        <BarPlot />
        <RaderPlot />
        <BubblePlot />
      </div>
    </div>
  )
}

export default App
