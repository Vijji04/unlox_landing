import React from 'react'
import Styles from '../styles/Footer.module.scss'
import { Container } from "react-bootstrap"
import { ImFacebook, ImTwitter, ImPinterest, ImYoutube } from 'react-icons/im'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <Container fluid className={Styles.footerContainer}>
            <div className={Styles.footerWrapper}>
                <div className={Styles.sec1}>
                    <h6 className={Styles.helpTitle}>Need Help?</h6>
                    <div className={Styles.text}>Got Questions? Call us 24/7!</div>
                    <div className={Styles.text}>Email Us : <span className={Styles.email}>support@unlox.in</span></div>
                    <div className={Styles.copySec}>
                        <img src={"/images/logo1.svg"} className={Styles.logo} />
                        <div className={Styles.copyright}>
                            Copyright © 2019 Unlox Inc.
                            <div>All rights reserved</div>
                        </div>
                    </div>
                </div>

                <div className={Styles.sec2}>
                    <div className={Styles.links1}>
                        <div className={Styles.head}>Company</div>
                        <div className={Styles.footerLink}>About Us</div>
                        <div className={Styles.footerLink}>Contact Us</div>
                        <div className={Styles.footerLink}>Career</div>

                    </div>

                    <div className={Styles.links1}>
                        <div className={Styles.head}>Privacy</div>
                        <div className={Styles.footerLink}>Privacy Policy</div>
                        <div className={Styles.footerLink}>Terms of Use</div>

                    </div>
                </div>

                <div className={Styles.sec3}>
                    <div className={Styles.getItSec}>
                        <img src={'/images/gplay.svg'} className={Styles.getBtn} />
                        <img src={'/images/appStore.svg'} className={Styles.getBtn} />
                    </div>
                    <div className={Styles.socialLinksSec}>
                        <div className={Styles.socialLink}><ImFacebook className={Styles.icon} /> </div>
                        <div className={Styles.socialLink}><ImTwitter className={Styles.icon} /> </div>
                        <div className={Styles.socialLink}><ImPinterest className={Styles.icon} /> </div>
                        <div className={Styles.socialLink}><FaInstagram className={Styles.icon} /> </div>
                        <div className={Styles.socialLink}><ImYoutube className={Styles.icon} /> </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
