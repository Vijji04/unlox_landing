import React from 'react'
import styles from '../styles/Herosection.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'


function Herosection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroLeft}>
                <h1>We help your business grow with</h1>
                {/* <h1>Software Development</h1> */}
                <div className={styles.subText}>
                  <Typewriter onInit={(typewriter)=>{
                    typewriter
                    .typeString("Software Development")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Brand Promotion")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Marketing")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Business Development")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Seed Funding")
                    .start();
                    
                  }}></Typewriter>
                </div>
            </div>
            <div className={styles.heroRight}>
            <Image src={'/images/software.svg'} className={styles.image1} width={533.1} height={545} objectFit="contain" />
            </div>
            
        </div>
    )
}

export default Herosection
