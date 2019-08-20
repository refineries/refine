import * as React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import navData from './menuData'

import ButtonDemo from '../components/button/demo'
function RouterView() {
  return (
    <div>
      <Route path="/button" component={ButtonDemo} />
    </div>
  )
}

export default RouterView
