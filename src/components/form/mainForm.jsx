import React, { Component } from "react";
import { Personal } from "./personalForm";
import { RenderDOM } from "./mainPreview";
import { Header } from "./header";
import { Footer } from "./footer";
class MainForm extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: "",
        email: "",
        phoneNo: "",
      },
    };
  }

  nameChange = (e) => {
    this.setState({
      personalData: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNo: document.getElementById("phoneNo").value,
      },
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <Header />
        <div
          id="mainContent"
          className="flex space-x-3 justify-center items-center"
        >
          <div className="rounded-md bg-red-600 h-fit w-fit p-4">
            <Personal change={this.nameChange} />
          </div>
          <div>
            <RenderDOM text={this.state.personalData.name} />
            <RenderDOM text={this.state.personalData.email} />
            <RenderDOM text={this.state.personalData.phoneNo} />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export { MainForm };
