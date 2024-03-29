import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter, } from "react-icons/fa"
import { SiTeamviewer } from "react-icons/si";

const Footer = () => {

    /*
    class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                this.setState({ date: new Date() })
            },
            1000
        );
    }
 <h2 className="">It's {this.state.date.toLocaleTimeString()}</h2>
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {*/
    return (
        <div className="footer">

            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={25} style={{
                            color: '#fff'
                            , marginRight: "2rem"
                        }} />
                        <div>
                            <p>Beim Kreuz 123 <br></br>
                                6700 Bludenz</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={25} style={{
                            color: '#fff'
                            , marginRight: "2rem"
                        }} />
                        <div>
                            <a href="tel:+43 5418 5622"><strong>+43 664 5121405</strong></a>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={25} style={{
                            color: '#fff'
                            , marginRight: "2rem"
                        }} />
                        <div>

                            <a href="mailto:batuhandanisment@hotmail.com"> <strong>batuhandanisment@hotmail.com</strong></a>
                        </div>

                    </div>

                    <div className="teamviewer">
                        <SiTeamviewer size={25} style={{
                            color: '#fff'
                            , marginRight: "2rem"
                        }} />
                        <div>
                            <a href="https://get.teamviewer.com">Fernwartung</a>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <div className="social">
                        <h4>Über uns</h4>
                        <p>Diese Webseite dient ausschließlich für ein Projekt und hat daher keinen Verwendungszweck. </p>

                        <FaFacebook size={30} style={{
                            color: '#fff'
                            , marginRight: "1rem"
                        }} />
                        <FaTwitter size={30} style={{
                            color: '#fff'
                            , marginRight: "1rem"
                        }} />
                        <FaInstagram size={30} style={{
                            color: '#fff'
                            , marginRight: "1rem"
                        }} />
                    </div>


                </div>

            </div>
        </div>
    )
}


export default Footer
