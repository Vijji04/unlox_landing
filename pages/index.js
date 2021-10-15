import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Image from 'next/Image'
import Herosection from '../Components/Herosection'
import Footer from '../Components/Footer'
import Navbar1 from '../Components/Navbar1'


const Home = () => {
  return (
    <>
    <Navbar1 />
    <Herosection />
    <Container fluid className={styles.landingContainer} id="services">
    <h3 className={styles.landingBanner }>Why pay more when you can for all your business needs</h3>
    <h4 className={styles.landingBanner2}>Heres what we offer</h4>
    
    {/* //coffeesection */}
    <div className={styles.coffeesection}>
      
      <div className={styles.left}>
        <Image src={'/images/coffee.svg'} className={styles.image1} width={482} height={432} objectFit="contain" />
      </div>
      
      <div className={styles.right}>
        <h4 className={styles.mainTitle}>We help you take a coffee break</h4>
        <p className={styles.paragraph}>
          Yes! Take a break while we connect you to your <br/>audience via social media,brand promotions,<br/>advertising and show our community your cool work
        </p>
        <div className={styles.icons}>
        <div className={styles.icons1}>
        <Image src={'/icons/brandpromotion.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Branding</h4>
        </div>
        <div className={styles.icons2}>
        <Image src={'/icons/advertising.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Advertising</h4>
        </div>
        <div className={styles.icons3}>
        <Image src={'/icons/socialmarketing.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Social Media <br/>Marketing</h4>
        </div>
        </div>
      </div>


    </div>
{/* //researchsection */}

    <div className={styles.researchSection}>

      <div className={styles.left}>
        <h4 className={styles.mainTitle}>Research and then some more</h4>
        <p className={styles.paragraph}>
          We understand the value of knowing your cards <br/>before playing them.We provide Market Analysis,Product<br/>Product Research and generate possible leads<br/> within the community tailored for your company.
        </p>
        <div className={styles.icons}>
        <div className={styles.icons1}>
        <Image src={'/icons/digitalmarketing.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Digital marketing</h4>
        </div>
        <div className={styles.icons2}>
        <Image src={'/icons/leadgen.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Lead Generation</h4>
        </div>

        </div>

      </div>
      <div className={styles.right2}>
        <Image src={'/images/research.svg'} className={styles.image1} width={415.5} height={432} objectFit="contain" />
      </div>


    </div>
 
 {/* // POt of Gold */}

    <div className={styles.potSection}>
      
      <div className={styles.left}>
        <Image src={'/images/pog.svg'} className={styles.image1} width={500} height={432} objectFit="contain" />
      </div>
      
      <div className={styles.right}>
        <h4 className={styles.mainTitle}>Find your pot of gold</h4>
        <p className={styles.paragraph}>
          Or maybe something even better.DATA!We provide <br/>you with data and analytics in order for you to <br/>know your audience better.
        </p>
        <div className={styles.icons}>
        <div className={styles.icons1}>
        <Image src={'/icons/datachart.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}>Data and analytics</h4>
        </div>
        </div>
      </div>


    </div>

{/* //content writing */}
<div className={styles.contentSection}>

      <div className={styles.left}>
        <h4 className={styles.mainTitle}>Get your content custom made</h4>
        <p className={styles.paragraph}>
          We encourage the creatives and your company<br/> deserves the best minds to have a dialog with the<br/> audience and we make sure that they will <br/> love to talk with you, with personalized <br/>content creation.
        </p>
        <div className={styles.icons}>
        <div className={styles.icons1}>
        <Image src={'/icons/blog.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}> Digital marketing</h4>
        </div>

        </div>

      </div>
      <div className={styles.right2}>
        <Image src={'/images/contentwriting.svg'} className={styles.image1} width={415.5} height={432} objectFit="contain" />
      </div>

 </div>


{/* //Reward Good deeds */}
    <div className={styles.rewardSection}>
      
      <div className={styles.left}>
        <Image src={'/images/reward2.svg'} className={styles.image1} width={482} height={432} objectFit="contain" />
      </div>
      
      <div className={styles.right}>
        <h4 className={styles.mainTitle}>We reward your good deeds</h4>
        <p className={styles.paragraph}>
          We value our community and the help they bring in <br/>to the businesses.Be it marketing, product research,<br/> lead generation we reward our community for their<br/> contribution to a growing ecosystem.
        </p>
        <div className={styles.icons}>
        <div className={styles.icons1}>
        <Image src={'/icons/trophy.svg'}  width={80} height={72} objectFit="contain" />
        <h4 className={styles.title}>Rewards and money</h4>
        </div>
        </div>
      </div>


    </div>
    
{/* //Dreamteam */}
<div className={styles.contentSection}>

      <div className={styles.left}>
        <h2 className={styles.mainTitle}>Have a Dream idea?</h2>
        <h4 className={styles.mainTitle}>Collaborate with the dream team</h4>
        <p className={styles.paragraph}>
        We collaborate with budding entrepreneurs<br/> and students for resource sharing and creating<br/> an eco-system where we help each other and grow.<br/> Also there is no judgement on degrees or<br/> ideation for the startup, if you can dream<br/> it, we can build it together.
        </p>

      </div>
      <div className={styles.right2}>
        <Image src={'/images/dreamteam.svg'} className={styles.image1} width={460} height={394} objectFit="contain" />
      </div>

 </div>

 
 {/* //Ourclients */}

 <h3 className={styles.ourClients}>Our Partners</h3>
 <div className={styles.clientDeets}>
 <div className={styles.client1}>
        <Image src={'/clients/wellyf.png'} className={styles.image1} width={233} height={91} objectFit="contain" />
</div>
<div className={styles.client2}>
        <Image src={'/clients/nsr.png'} className={styles.image1} width={233} height={91} objectFit="contain" />
</div>
</div>
    



    </Container>
    <Footer/>
    </>
  )
}

export default Home;
