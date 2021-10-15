import React from 'react'
import { Container } from 'react-bootstrap'
import Styles from "../styles/Navbar1.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const Navbar1 = () => {
    return (
        <Container fluid className={Styles.navbarContainer} >
            <div className={Styles.navbarWrapper1}>
            <div className={Styles.logo}>
                <Image src={'/icons/logo1.svg'} className={Styles.logoPic1} width={64} height={70} alt="unlox_logo" />
            </div>
            
            <div className={Styles.navContent}>
            <Link href="/"><a className={Styles.info}> Home </a></Link> 
            <a href="#services" className={Styles.info}>Services</a>    
            <Link href="/join-our-community"><a className={Styles.info}> Join our Community</a></Link>        
            </div>
            </div>
        </Container>
    )
}

export default Navbar1
