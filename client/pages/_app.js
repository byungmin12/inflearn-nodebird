import "antd/dist/antd.css"
import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'

const App = ({Component}) =>{
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component/>
        </div>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;