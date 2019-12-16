import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'


axios
  .get('http://localhost:3001/vitsit')
  .then(response => {
    const vitsit = response.data
    
    ReactDOM.render(
      <App notes={vitsit} />,
      document.getElementById('root')
    )
  })



