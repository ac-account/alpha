import React from 'react'
import logo from '../assets/images/logo-empty.png';
import Link from 'gatsby-link'

const Year = () => {
    return (
        <span>{(new Date()).getFullYear() === 2018 ? "2018" : "2018 - " + (new Date()).getFullYear()}</span>
    )
}

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <h4>Alpha Captura - <Year /></h4>
        </div>
    </footer>
)

export default Footer
