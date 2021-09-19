import React,{Component} from "react";
import logo from "../asset/logo.png";
export default class Home extends Component {
    render() {
      return (
          <div id="app-background" className="container-fluid app-background">
              <div id="app-header" className='container pt-5' >
                  <img className="header-logo"src={logo} alt='logo-weather-app'/>
                  <div className="input-group mb-3 pt-5 input-grp-city position-absolute start-50 translate-middle" >
                    <input type="text" className="form-control input-add-city" placeholder="Enter a city"/>
                    <button className="btn btn-outline-secondary btn-add-city" type="button" id="button-addon2">Add City</button>
                 </div>
              </div>
              
              
          </div>
      );
    }
  }