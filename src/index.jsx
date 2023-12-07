import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import Home from './components/screens/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'

ReactDOM.render(
    <React.StrictMode>
        <Layout>
            <Home />
        </Layout>
    </React.StrictMode>, document.getElementById('root'))
