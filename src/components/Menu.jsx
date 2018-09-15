import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/productos">Products</Link></li> {/* langing */}
                <li><Link onClick={props.onToggleMenu} to="/acerca-de-nosotros">About us</Link></li> {/* generic */}
                <li><Link onClick={props.onToggleMenu} to="/contacto">Contact us</Link></li> {/* elements */}
            </ul>
            <ul className="actions vertical">
                <li><a onClick={props.onToggleMenu} className="button special fit" href="javascript:;">Close</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;"></a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
