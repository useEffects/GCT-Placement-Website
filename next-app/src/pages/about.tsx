import { Container } from '@mui/material'
import clusterimg from '../images/Group 9133.png'
import linkedin from './Vector.svg'

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
      img:"",
      name:"Joel Samuel Raj",
      departname:"IT",
      linkedin:"h"
    },
    {
      img:"",
      name:"Jeremy Asirwaad",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/jeremy-asirwaad-182b93192"
    },
    {
      img:"",
      name:"Ajmal Fariz",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/ajmal-fariz-b85443224"
    },
    {
      img:"",
      name:"Saran Pradeep",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/saran-pradeep-j-818a911ba/"
    },
    {
      img:"",
      name:"Shameer",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/shameer-k-90457b186"
    },
    {
      img:"",
      name:"Krishanan",
      departname:"IT",
      linkedin:"https://www.linkedin.com/in/krishnan-k-4416b7220"
    },
    {
      img:"",
      name:"A. Uthra Priyadarshini",
      departname:"EEE",
      linkedin:"https://www.linkedin.com/in/uthra-priyadarshini-a816a7212"
    },
    
  
  ]

  return <div className="aboutpage">
    <div className="aboutbanner"></div>
    <Container>
    <h1 className="aboutt1 text-center">Futuristic Features of this Platform</h1>
    <div className="aboutinnercaro justify-center w-full">
      {
        aboutinnercards.map((e) => {
          return <div className="aboutinnercard">
          <span className="abtinnert1">{e.title}</span>
          <span>{e.content}</span>
        </div>
        })
      }
    </div>
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
          <img className='devcardimg' src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" alt="" />
          <span className='devcardtitle'>{dev.name}</span>
          <span className='devcarddept'>{dev.departname}</span>
          <a href={dev.linkedin}> <img className='linkedinimg' height={"20px"} width={"20px"} src={"https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"} alt="" /></a>
        </div>
        })
      }
     
      
    </div>
    </Container>
  </div>
 
}
