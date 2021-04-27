import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state={
            showServicesMenu: false
        }
        this.showServicesMenu = this.showServicesMenu.bind(this);
    }

      showServicesMenu(e) {
          e.preventDefault();
          if (this.state.showServicesMenu == false) {
          this.setState({
            showServicesMenu: true,
          });
        } else {
          this.setState({
            showServicesMenu: false,
          });
        }
      }
    
    render(){
        return (
            <div className="Header">
                <div className="mainHeader">
                    <a className="logoContainer" href="/"><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/svs-controls.appspot.com/o/Header%2Fthumbnail_Logo1%20clear%20background.png?alt=media&token=dcf550ad-6f27-4fc3-8aea-3442764e7886"/></a>
                    <div className="link_container">
                        <div className="linkContainerSmall">
                            <a className="links" href="/"><p className="mainHeaderLinkText">Home</p></a>
                        </div>
                        <div className="linkContainerSmall2">
                            <a className="links" href="/contact"><p className="mainHeaderLinkText">Request a Meeting</p></a>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }  
}

  export default Header;