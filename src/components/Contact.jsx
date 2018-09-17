import React, { Component } from 'react'
import logo from '../assets/images/logo-empty.png';
import validator from 'validator';
import { Link } from 'react-router-dom';
import axios from "axios";


// const Contact = (props) => (
export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        loaging: false,
        show: false
    };

    updateName = (e) => {
        let { target: { value } } = e;
        this.setState({ name: value }, () => { this.showButton() });
    };

    updateEmail = (e) => {
        let { target: { value } } = e;
        this.setState({ email: value }, () => { this.showButton() });
    };

    updateMessage = (e) => {
        let { target: { value } } = e;
        this.setState({ message: value }, () => { this.showButton() });
    };

    showButton = () => {
        const { name, email, message } = this.state;
        let show = (name !== '' ? true : false) && (email !== '' ? true : false) && (message !== '' ? true : false);
        this.setState({ show: show });
    };

    send = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        }, () => {
            const { name, email, message } = this.state;
            axios.post('/.netlify/functions/pack', {
                "name": name,
                "email": email,
                "message": message
            })
                .then(function (response) {
                    console.log(response);
                    this.setState({ loading: false })
                })
                .catch(function (error) {
                    console.log(error);
                    this.setState({ loading: false })
                });
            console.log('send');
        })

    };

    clean = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
        });
    };

    render() {
        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        <h3>Send us a message and start your Free Trial today</h3>
                        <form method="POST" autoComplete="off">
                            <div className="field half first">
                                <label htmlFor="name">Name</label>
                                <input onChange={this.updateName} type="text" name="name" id="name" />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Your email</label>
                                <input onChange={this.updateEmail} type="email" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea onChange={this.updateMessage} name="message" id="message" rows="6"></textarea>
                            </div>
                            <ul className="actions">
                                {this.state.show ?
                                    <div>
                                        <li><input onClick={this.send} disabled={!this.showButton} type="submit" value="Send" className="special" /></li>
                                        <li><input onClick={this.clean} type="reset" value="Clean form" /></li>
                                    </div>
                                    :
                                    null
                                }
                            </ul>
                        </form>
                    </section>
                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="#">info@alphacaptura.com</a>
                            </div>
                        </section>
                        <section>
                            <br />
                            <br />
                            <img style={{
                                width: '150px',
                                margin: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} src={logo} alt="" />
                            <h2 style={{ textAlign: 'center', letterSpacing: '6px' }}><div style={{ backgroundColor: 'white', display: 'inline', color: '#242941', padding: '5px' }}  >ALPHA</div> <span>CAPTURA</span></h2>
                        </section>
                    </section>
                </div>
            </section>
        )
    }
}

// export default Contact
