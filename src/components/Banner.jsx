import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <br />
                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img style={{ width: '185px', margin: 'auto' }} src={logo} alt="" />
                </div>
                <br /> */}
                <h1>AlphaCaptura</h1>
            </header>
            <div className="content">
                <p>Welcome to AlphaCaptura
                <br />
                <br />a unique, robust, straightforward solution
                <br /> for ultra-low latency news trading and more.</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Products</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
