import '../About/index.css'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutBanner from '../../assets/IMG_about.png'
import descriptions from '../../data/description.json'

function About() {

    return (
 
      <div className="about">
      <Banner image={aboutBanner}/>

        { descriptions.map((item) => {
          return (
            <div className="collapse-container" key={item.id}>
            <Collapse content={item.content} title={item.title}/>
            </div>
          )
        })}
   
      </div>
  
    );
  }
  
  export default About;
  