import { Component } from 'react'
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';


class Footer extends Component {
  render(){
    return (
      <div className="footerMainContainer">
          <div className="footerContainer">
              <h3 className="footerContainerTitle">Keep In Touch</h3>
              <hr className="footerContainerTitleBorder"/>
              <p className="footerContainerInfo">Jais Sandhu, Office Manager</p>
              <p className="footerContainerInfo">Phone: 403-361-5041</p>
              <p className="footerContainerInfo">jais.sandhu@svscontrols.com</p>
              <p className="footerContainerInfo">421 7th Ave SW, 30th floor Calgary,AB T2P 4K9</p>
          </div>
          <div className="footerContainer">
              <h3 className="footerContainerTitle">Directory</h3>
              <hr className="footerContainerTitleBorder"/>
              <a className="footerContainerInfo" href="/"><b>Home →</b></a>
              <a className="footerContainerInfo" href="/contact"><b>Contact →</b></a>
          </div>
          <div className="footerIcons">
            <a className="icon" href=""><FaInstagramSquare/></a>
            <a className="icon" href=""><FaLinkedin/></a>
          </div>
      </div>
    )
  }
}

export default Footer;