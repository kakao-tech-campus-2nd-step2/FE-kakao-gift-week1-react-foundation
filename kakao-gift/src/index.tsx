import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@src/App'
import reset from '@styles/reset'
import { Global } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>
)
