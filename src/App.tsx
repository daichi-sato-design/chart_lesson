import React from 'react'
import './App.css'

// Chart.js
import LinePlot from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'
import RaderPlot from './components/RaderPlot'
import BubblePlot from './components/BubblePlot'

// MaterialUI
import MaterialUI from './components/MaterialUI'

function App() {
  return (
    <div className="App">
      <div className="App__wrap">
        {/* Chart.js */}
        <LinePlot />
        <PiePlot />
        <BarPlot />
        <RaderPlot />
        <BubblePlot />
        {/* MaterialUI */}
        <MaterialUI />
      </div>
    </div>
  )
}

export default App
