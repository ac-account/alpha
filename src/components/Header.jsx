import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/logo-empty.png';
// import logo from '../assets/images/logo/logo.png';
const handleResize = () => {
    return window.innerHeight;
};
typeof window !== 'undefined' && window.addEventListener('resize', handleResize);

// const Header = (props) => (

class Header extends Component {

    state = {
        windowHeight: undefined,
        windowWidth: undefined
    }

    handleResize = () => this.setState({
        windowHeight: typeof window !== 'undefined' && window.innerHeight,
        windowWidth: typeof window !== 'undefined' && window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        typeof window !== 'undefined' && window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        typeof window !== 'undefined' && window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <div>
                <header id="header" className="alt">
                    <img style={{ width: 'auto', verticalAlign: 'middle', height: '2em', margin: '0.5em' }} src={logo} alt="" />

                    {parseInt(this.state.windowWidth, 10) < 481 ?
                        <Link to="/" className="logo">
                            <strong>ALPHA CAPTURA</strong> 
                        </Link>
                        :
                        <Link to="/" className="logo">
                            <strong>ALPHA </strong> <span>CAPTURA</span>
                        </Link>
                    }
                    <nav>
                        <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;">Menu</a>
                    </nav>
                </header>
            </div>
        )
    }
}

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
