import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import AppRouterPortfolio from './_playground/routers/AppRouter'

const appRoot = ReactDOM.createRoot(document.getElementById('app'))
console.log(<AppRouter/>)
appRoot.render(<AppRouter/>)