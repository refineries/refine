import * as React from 'react'
import './index.scss'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SideNav from './SideNav'
import RouterView from './RouterView'
function Main() {
  return (
    <div className="demo">
      <Router>
        <SideNav />
        <RouterView />
      </Router>
    </div>
  )
}

export default Main
