import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home, About, FileSystem } from './pages/'
import { Header, SideBar } from './components/'


import './styles/Site.css'

const App = () => {
  const [hiddenStatus, toggleHiddenStatus] = useState(false);
  const showSideBar = () => {
    toggleHiddenStatus(!hiddenStatus)
  };

  const renderSideBar = () => {
    if (hiddenStatus === false) {
      return <div className='no-sidebar'></div>
    }
    return <Route path="/" component={SideBar} />
  }

  return (
    <BrowserRouter>
      <div className="site">
        <Route path="/" component={() => <Header showSidebar={showSideBar} />} />
        <div className="page-container">
          {renderSideBar()}
          <div className="body">
            <Route exact path="/" component={() => <Home name="Shane" />} />
            <Route path="/about/" component={() => <About />} />
            <Route path="/filesystem/" component={() => <FileSystem />} />
          </div>
        </div>
      </div >
    </BrowserRouter>
  )
}

export default App;