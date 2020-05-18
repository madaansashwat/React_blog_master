import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Header = (props) => {
    
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <a href className="brand-logo">Vatsav's Blog</a>
           
            </div>
            </nav>
    )
}

export default withRouter(Header)
