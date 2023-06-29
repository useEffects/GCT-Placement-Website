import { Container } from '@mui/material'
import AboutCarousel from '../@components/about.carousel'
import Space from '../@styled-components/space'
import clusterimg from '../images/Group 9133.png'
import Guru from '../images/devs/Gururagavendra.jpg'
import Joel from '../images/devs/Joel.jpeg'
import Jeremy from "../images/devs/2022-11-11_12-15.png"
import Saran from '../images/devs/Saran.jpeg'
import Sham from '../images/devs/Shameer.jpeg'
import uthra from '../images/devs/Uthra.jpeg'
import Krish from '../images/devs/Krishnan.jpeg'
import Amruth from '../images/devs/Amruth.jpg'
import Ajmal from '../images/devs/Ajmal.jpeg'




export default function about () {

  const aboutinnercards = [
    {
      title:"Simplifying process flow",
      content:"Hands-on experience in all placement-related activities is made simple and easy."
    },
    {
      title:" Transparency",
      content:"A discerning insight into what's happening internally and The Most easiest way to become aware of smart Moves."
    },
    {
      title:"Simplifying process flow",
      content:"Hands-on experience in all placement-related activities is made simple and easy."
    },
  ]

  const devconner = [
    {
      img:Joel.src,
      name:"Joel Samuel Raj",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/joel-samuel-369355206"
    },
    {
      img:Jeremy.src,
      name:"Jeremy Asirwaad",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/jeremy-asirwaad-182b93192"
    },
    {
      img:Guru.src,
      name:"Gururagavendra V",
      departname:"ECE",
      linkedin:"https://www.linkedin.com/in/gururagavendra"
    },
    {
      img:Ajmal.src,
      name:"Ajmal Fariz",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/ajmal-fariz-b85443224"
    },
    {
      img:Saran.src,
      name:"Saran Pradeep",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/saran-pradeep-j-818a911ba/"
    },
    {
      img:Sham.src,
      name:"Shameer",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/shameer-k-90457b186"
    },
    {
      img:Krish.src,
      name:"Krishanan",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/krishnan-k-4416b7220"
    },
    {
      img:Amruth.src,
      name:"M. Amruth Kiran",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/amruth-kiran-56b41117b"
    },
    {
      img:uthra.src,
      name:"A. Uthra Priyadarshini",
      departname:"EEE",
      linkedin:"https://www.linkedin.com/in/uthra-priyadarshini-a816a7212"
    },
  ]
  return <div className="aboutpage">
    <div className="aboutbanner">
      <AboutCarousel />
    </div>
    <Container>
    <h1 className="aboutt1 text-center">Futuristic Features of this Platform</h1>
    <div className="aboutinnercaro justify-between w-full">
      {
        aboutinnercards.map((e) => {
          return <div className="aboutinnercard">
          <span className="abtinnert1">{e.title}</span>
          <span>{e.content}</span>
        </div>
        })
      }
    </div>
    <Space />
    <div className="aboutimgrow">
      <div className='abtiner1'>
        <img src={clusterimg.src} alt="" />
      </div>
      <div className='abtiner2'>
        <span>We are extremely proud to present our major recruiters. We have been constantly inundated with support from these successful companies who have provided deserving positions to our students</span>
      </div>
    </div>
    <h1 className='aboutt1 text-center'>DEVELOPER’S CORNER</h1>
    <div className="devconnercaro">
      {
        devconner.map((dev) => {
          return  <div className="devcorcard">
          <img className='devcardimg' src={dev.img} alt="" />
          <div style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
            <a target="_blank" href={dev.linkedin}> <img style={{marginRight:"10px", marginTop:"20px"}} className='linkedinimg' height={"20px"} width={"20px"} src={"https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"} alt="" /></a>
            <span className='devcardtitle'>{dev.name}</span>
          </div>
          <span className='devcarddept'>{dev.departname}</span>
          
        </div>
        })
      }
    </div>
    </Container>
  </div>
 
}
