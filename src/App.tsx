import React from 'react'
import { HashRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import './index.scss'
import SideNav from './SideNav'
import RouterView from './RouterView'

function App() {
  return (
    <div className="demo">
      <HashRouter>
        <SideNav />
        <RouterView />
      </HashRouter>
    </div>
  )
}

export default hot(App)
