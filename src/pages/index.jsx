import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pics/pic01.jpg'
import pic02 from '../assets/images/pics/pic02.jpg'
import pic03 from '../assets/images/pics/pic03.jpg'
import pic04 from '../assets/images/pics/pic04.jpg'
import pic05 from '../assets/images/pics/pic05.jpg'
import pic06 from '../assets/images/pics/pic06.jpg'


class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="index-site" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">

                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <Link to="/acerca-de-nosotros">
                                    <h2>About us</h2>
                                </Link>
                            </header>
                            <ul className="actions">
                                <li>
                                    <Link to="/acerca-de-nosotros" className="button next scrolly">About us</Link>
                                </li>
                            </ul>
                            {/* <p>AC was designed by traders for traders which trade on economic news information.</p>
                            <p>It is eminent for traders to be prepared with the best when important economic announcements are released. Usually some economic indicators have a massive impact which moves the market in a unexpected direction.  The key is to be fast get filled or hedge and AlphaCaptura can definitely do that, providing real-time economic indicators within milliseconds, hugely improving the outcome of spike trading on any tradable instruments that react to economic news such as Forex, Fx Futures, Indices, Metals, Oil, Natural Gas, WASDE..etc...</p> */}
                        </div>
                    </section>

                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>AlphaCaputra API/UDP Feed</h3>
                                <p>The fastest way of getting reliable news, click her for a free trial</p>
                            </header>
                            <Link to="/productos" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>AlphaCaptura Clicker</h3>
                                <p>AC Clicker is made for point and click, super fast via Metatrader 4 (all rights reserved)</p>
                            </header>
                            <Link to="/productos" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>CryptoCurrencies</h3>
                                <p>Machine Learning prediction feed / Buy and sell in big blocks</p>
                            </header>
                            <Link to="/productos" className="link primary"></Link>
                        </article>
                        {/* <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>Producto 4</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/productos" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Producto 5</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/productos" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Try our service FREE for one month</h3>
                                <p>Contact us</p>
                            </header>
                            <Link to="#three" className="link primary"></Link>
                        </article> */}
                    </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>About us</h2>
                            </header>
                            <ul className="actions">
                                <li><Link to="/acerca-de-nosotros" className="button next">About us</Link></li>
                            </ul>
                        </div>
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
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`