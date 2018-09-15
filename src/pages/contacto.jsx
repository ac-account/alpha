import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const Generic = (props) => (
    <div>
        <Helmet>
            <title>Contact us</title>
            <meta name="contact-us" content="Page to contact us" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact us</h1>
                    </header>
                </div>
            </section>
        </div>

    </div>
)

export default Generic