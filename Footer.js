import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Footer = (props) => {
   
    return (
        <nav className="nav-wrapper yellow darken-3">
            <p style ={{textAlign:"center"}}>Copyright© Vatsav</p>
            </nav>
    )
}

export default withRouter(Footer)