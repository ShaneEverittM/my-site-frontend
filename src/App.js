import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, About } from './pages/'
import { Header } from './components/'


import './styles/Site.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="site">
        <Route path="/" component={Header} />
        <div className="body">
          <Route exact path="/" component={() => <Home name="Shane" />} />
          <Route path="/about/" component={() => <About />} />
        </div>
      </div >
    </BrowserRouter>
  )
}

export default App;