import Head from 'next/head';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, FormText } from 'reactstrap'
import axios from 'axios'

class Home extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="homeMainContainer">
        <Header/>
        <div className="homeHeaderContainer">
          <h1 className="homeMainTitle">We Build Automated Custom Software</h1>
          <h3 className="homeTitleSmall">Spring Valley Solutions Ltd has 20 years of experience designing, commissioning and supporting complex automation systems in the energy, food and manufacturing industries.</h3>
          <img className="homeLandingImage" src="https://firebasestorage.googleapis.com/v0/b/svs-controls.appspot.com/o/Home%2Fhome%20landing.jpg?alt=media&token=37cf428d-f20e-4c76-884e-85f3c8b55274"/>
        </div>
        <div className="homeBodyContainer">
          <h1 className="homeBodyTitle">What Can We Do For You</h1>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">AUTOMATION SYSTEM DESIGN</h3>
            <p className="homeBodyText">Spring Valley Solutions Ltd. has 20 years of experience designing, commissioning and supporting complex automation systems in the energy, food and manufacturing industries.  Our team has a thorough understanding of the sensors, controllers, computers, software, industrial networking and overall operating procedures that make automation systems work, and our experience helps increase the efficiency and reduce the payback period of automation systems for our customers. We can work with many platforms, but have extensive experience with Siemens and Allen-Bradley.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">AUTOMATION SYSTEM TROUBLESHOOTING</h3>
            <p className="homeBodyText">With 20 years experience, we have what it takes to troubleshoot complex problems with today's automation systems as well as those built on older automation platforms that can be difficult for others to support.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">SOFTWARE DESIGN AND INTEGRATION</h3>
            <p className="homeBodyText">We have an understanding of current and past software and computer technologies such as virtualization, networking, security and software development as it relates to automation.  From an in-depth knowledge of OPC for computer-controller communications to the ability to send data to modern cloud platforms, our experience can help increase the efficiency of your overall automation system where computers are involved.</p>
          </div>
          <div className="homeBodyContainerSmall">
            <h3 className="homeBodyTitleSmall">HYDRAULIC FRACTURING CONTROL PACKAGES</h3>
            <p className="homeBodyText">We have an understanding of current and past software and computer technologies such as virtualization, networking, security and software development as it relates to automation.  From an in-depth knowledge of OPC for computer-controller communications to the ability to send data to modern cloud platforms, our experience can help increase the efficiency of your overall automation system where computers are involved.</p>
          </div>
        </div>
        <div className="homeMainCapabilitiesContainer">
          <div className="homeCapabilitiesContainer2">
            <h2 className="homeCapabilitiesContainerTitle">Our History</h2>
            <p className="homeCapabilitiesText">We serve as your automation building partner from concept to completion, solving tough automation control challenges and helping businesses grow.</p>
          </div>
          <div className="homeCapabilitiesContainer3">
            <h2 className="homeCapabilitiesTitle">BUILT-TO-LAST</h2>
            <p className="homeCapabilitiesTextSmall">Spring Valley Solutions was founded in 2001 by Dana Moffit after learning Automation and Control System Design at a larger integration firm. SVS is focused on designing, commissioning and supporting complex automation systems in the energy, food and manufacturing industries. <br/><br/>Our team has a thorough understanding of the sensors, controllers, computers, software, industrial networks and overall operating procedures that make automation systems work, and our experience helps us increase the efficiency and reduce the payback period of automation systems for our customers.<br/><br/> We have provided services to some of North America’s largest companies thanks to our extensive experience with Siemens PLC, HMI and drive systems as well as those provided by other major manufacturers.</p>
          </div>
        </div>
        <div className="careersContainer">
          <h2 className="careersMainTitle">Careers</h2>
          <p className="careersMainText">Spring Valley Solutions is looking for eager, talented professionals to join our team. We pride ourselves on providing the highest quality of service to our clients, as well as remaining environmentally responsible and safety conscious. Our success and growth is a direct result of our people.<br/><br/> If you feel that you can contribute your skills, experience and professionalism to our team, please submit your information below and we will be in contact. We thank all applicants for their interest in Blue Ridge Excavating.</p>
          <h2 className="careersTitleSmall">Apply</h2>
          <p>To apply please send your resume and any supporting documents too <b>careers@svscontrols.com</b></p>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;