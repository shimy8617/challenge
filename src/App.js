import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import "./assets/css/App.css";
import NavBar from "./components/NavBar";
import Vegan from "./components/Vegan";
import GlutenFree from "./components/Gluten-Free";
import Ketogenic from "./components/Ketogenic";
import GetInfo from "./components/test";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      email: "",
    };
    this.updateState = this.updateState.bind(this);
  }

  async updateState(logged, email) {
    await this.setState({
      logged: logged,
      email: email,
    });
    console.log(this.state);
  }

  renderLogin() {
    return (
      <div className="body-container">
        <Login onTryLogin={this.updateState} />
      </div>
    );
  }

  renderApp() {
    return (
      <div className="body-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/test" element={<GetInfo />} />
          <Route path="/Vegan" element={<Vegan />} />
          <Route path="/Gluten-Free" element={<GlutenFree />} />
          <Route path="/Ketogenic" element={<Ketogenic />} />
        </Routes>
      </div>
    );
  }
  render() {
    if (this.state.logged) {
      return this.renderApp();
    } else {
      return this.renderLogin();
    }
  }
}
