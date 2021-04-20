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
              <p className="footerContainerInfo">Phone: (403) 874-3978</p>
              <p className="footerContainerInfo">Fax: (403) 279-8299</p>
              <p className="footerContainerInfo">BAY 9, 7408 40 Street SE, Calgary, AB T2C 2L6</p>
              <p className="footerContainerInfo">jais.sandhu@svscontrols.com</p>
          </div>
          <div className="footerContainer">
              <h3 className="footerContainerTitle">Directory</h3>
              <hr className="footerContainerTitleBorder"/>
              <a className="footerContainerInfo" href="/"><b>Home →</b></a>
              <a className="footerContainerInfo" href="/contact"><b>Contact →</b></a>
          </div>
          <div className="footerIcons">
            <a className="icon" href=""><FaFacebookF/></a>
            <a className="icon" href=""><FaInstagramSquare/></a>
            <a className="icon" href=""><FaLinkedin/></a>
          </div>
      </div>
    )
  }
}

export default Footer;