import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { FaRegClock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import axios from 'axios'


class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: '',
          email: '',
          message: ''
        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSumbit = this.handleSumbit.bind(this);
      }
    
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSumbit(e) {
        e.preventDefault();
    
        const { name, email, message} = this.state;
    
        const form = axios.post('', {
          name,
          email,
          message
        })
        e.target.reset();
      }

  render() {
    return (
      <div className="contactPageContainer">
        <Header/>
        <img src="https://firebasestorage.googleapis.com/v0/b/breton-excavation.appspot.com/o/contact%20us%2Fcontactus.webp?alt=media&token=1e777912-e71a-4ac2-8eae-584faaa0446f"></img>
        <div className="contactPageContainerSmall">
          <div className="contactPageSideMenu">
              <div className="sideBarEmail">
                  <FaMailBulk className="mailIcon"/>
                  <p className="contactText">Email us</p>
                  <p className="contactText">jais.sandhu@svscontrols.com</p>
              </div>
              <div className="sideBarWebsite">
                  <FaHome className="houseIcon"/>
                  <p className="contactText">Visit us</p>
                  <a className="contactText" href="https://www.bretonexcavation.com/">https://www.svscontrols.com/</a>
              </div>
              <div className="sideBarTime">
                  <FaRegClock className="clockIcon"/>
                  <p className="contactText">Monday - Friday</p>
                  <p className="contactText">9:00am - 5:00pm</p>
              </div>
              </div>
              <Form onSubmit={this.handleSumbit}>
                <p className="contactTitle">Please share your information with us for a detailed response:</p>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="text"
                    name="firstName" 
                    placeholder="First Name"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="contactFG">
                  <Input 
                    className="contactInput"
                    type="text"
                    name="organizationWebsite"
                    placeholder="Organization Website"
                    onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="messageGroupForm">
                  <textarea
                    className="contactTextArea" 
                    type="textarea"
                    name="message"
                    placeholder="How can we help you?"
                    onChange={this.handleChange} />
                </FormGroup>
                <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
            </Form>
          </div>
          <Footer/>
      </div>
    )
  }
}

export default Contact;