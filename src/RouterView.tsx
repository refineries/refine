import React from 'react'
import { Route } from 'react-router-dom'
import ButtonDemo from '../components/button/demo'

function RouterView() {
  return (
    <div>
      <Route path="/button" component={ButtonDemo} />
    </div>
  )
}

export default RouterView
