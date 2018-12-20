import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router-dom'
import {default as App} from './components/App'

render(
    <Router>
      <App />
    </Router>,
  document.getElementById('app')
)
