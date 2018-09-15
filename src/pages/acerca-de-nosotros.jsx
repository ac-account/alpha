import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pics/pic10.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>About us</title>
            <meta name="about-us" content="page to see the about us" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About us</h1>
                    </header>
                    <p>A unique, robust, straightforward solution for news trading and more. </p>
                    <p>
                        AlphaCaptura was designed by traders for traders whom are engaged on trading off economic news information.  Having access to the right data at the right time is eminent for traders to generate Alpha. Frequently some economic indicators have a massive impact which moves the market in an unexpected direction.  The key is to be fast get filled or hedge and AlphaCaptura provides you with that key. AlphaCaptura provides real-time economic indicators within milliseconds, hugely improving the outcome of spike trading on any tradable instruments that react to economic news such as in the following asset classes: Forex, FX Futures, Indices, Metals, Oil, Natural Gas, WASDE..etc….
                    </p>
                        <ul className="actions">
                            <li><Link to="/contacto" className="button next scrolly">Try it for FREE</Link></li>
                        </ul>

                    <span className="image main"><img src={pic11} alt="" /></span>
                </div>
            </section>
        </div>

    </div>
)

export default Generic