import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default function (el, props) {
  props = props || {}
  ReactDOM.render(<App {...props} />, el)
}
