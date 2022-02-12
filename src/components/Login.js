import React, { Component } from "react";
import "../assets/css/Login.css";
import axios from "axios";
import appConfig from "../appConfig";
import NavBar from "./NavBar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeStateApp = this.props.onTryLogin;

    this.state = {
      email: "",
      password: "",
    };
  }

  async handleClick(e) {
    e.preventDefault();    
    let response = await axios.post(appConfig.urlBackend + "users", this.state);
    console.log(response);
    if (response.data.length === 1) {
      this.changeStateApp(true, response.data[0].nombre);
    } else {
      alert("El mail o contraseña no son correctos");
    }
  }

  async handleChange(e) {
    if (e.target.name === "email") {
      await this.setState({
        email: e.target.value,
      });
    } else {
      await this.setState({
        password: e.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <form>
              <input
                type="text"
                className="fadeIn second"
                name="email"
                onChange={this.handleChange}
                placeholder="email"
              ></input>
              <input
                type="password"
                className="fadeIn third"
                name="password"
                onChange={this.handleChange}
                placeholder="password"
              ></input>
            </form>

            <div id="formFooter">
              <input
                type="button"
                className="fadeIn fourth"
                onClick={this.handleClick}
                value="Login"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
