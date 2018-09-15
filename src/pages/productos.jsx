import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic03 from '../assets/images/pics/pic03.jpg'
import pic08 from '../assets/images/pics/pic08.jpg'
import pic09 from '../assets/images/pics/pic09.jpg'
import pic10 from '../assets/images/pics/pic10.jpg'

import pic01 from '../assets/images/pics/pic01.jpg'
import pic02 from '../assets/images/pics/pic02.jpg'
import pic04 from '../assets/images/pics/pic04.jpg'
import pic05 from '../assets/images/pics/pic05.jpg'
import pic06 from '../assets/images/pics/pic06.jpg'




const Elements = (props) => (
    <div>
        <Helmet>
            <title>Productos</title>
            <meta name="products" content="Page with all the products" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one" className="tiles">
                <article style={{ backgroundImage: `url(${pic06})` }}>
                    <header className="major">
                        <h3>AlphaCaputra UDP Feed</h3>
                        <p>The fastest way of getting reliable news, click her for a free trial</p>
                    </header>
                    <Link to="/contacto" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic03})` }}>
                    <header className="major">
                        <h3>AlphaCaptura Clicker</h3>
                        <p>AC Clicker is made for point and click, super fast via Metatrader 4 (all rights reserved)</p>
                    </header>
                    <Link to="/contacto" className="link primary"></Link>
                </article>
                <article style={{ backgroundImage: `url(${pic02})` }}>
                    <header className="major">
                        <h3>Crytocurrency</h3>
                        <p>Machine Learning prediction feed / Buy and sell in big blocks</p>
                    </header>
                    <Link to="/contacto" className="link primary"></Link>
                </article>
            </section>
            <section id="three">
                <div className="inner">
                    <header className="major">
                        <h2>Trading is risky</h2>
                    </header>
                    <p>There is a substantial risk of loss in futures and forex trading. Online trading of stocks and options is extremely risky. Assume you will lose money. Don't trade with money you cannot afford to lose.</p>
                </div>
            </section>

        </div>

    </div>
)

export default Elements