import React, { Component } from "react";
import { PersonalForm } from "./personalForm";
import { RenderDOM } from "./mainPreview";
import { Header } from "./header";
import { Footer } from "./footer";
import uniqid from "uniqid";
import { WorkExperienceForm } from "./workExperienceForm";

class MainForm extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: "",
        email: "",
        phoneNo: "",
      },

      workExperience: {
        company: "dw",
        position: "aw",
        startDate: "de",
        endDate: "fr",
        description: "gr",
        id: uniqid(),
      },

      workExperienceArray: [
        {
          company: "dsda",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
          id: uniqid(),
        },
      ],
    };

    this.peronalInfoHandler = this.peronalInfoHandler.bind(this);
    this.workExperienceHandler = this.workExperienceHandler.bind(this);
    this.workExperienceAddHandler = this.workExperienceAddHandler.bind(this);
  }

  peronalInfoHandler = (e) => {
    this.setState({
      personalData: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNo: document.getElementById("phoneNo").value,
      },
    });
    console.log(e.target.value);
  };

  workExperienceHandler = (index, e, name) => {
    let name1 = e.target.name;
    const newValues = [...this.state.workExperienceArray];
    newValues[index].company.value = e.target.value;
    this.setState({ workExperienceArray: newValues });
  };

  workExperienceAddHandler = (e) => {
    e.preventDefault();
    this.setState({
      workExperienceArray: this.state.workExperienceArray.concat(
        this.state.workExperience
      ),
      workExperience: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        id: uniqid(),
      },
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div
          id="mainContent"
          className="flex space-x-3 justify-center items-center"
        >
          <div className="flex-row rounded-md bg-gray-300 h-fit w-fit p-4  justify-center items-center space-y-4">
            <div className="">
              <PersonalForm change={this.peronalInfoHandler} />
            </div>
            <div>
              <WorkExperienceForm
                change={this.workExperienceHandler}
                experienceArr={this.state.workExperienceArray}
                workExperienceDetails={this.state.workExperience}
              />
              {/*<button onClick={this.workExperienceAddHandler} />*/}
            </div>
          </div>
          <div className="fields">
            <div>
              <h1 className="title">Personal Info</h1>
              <RenderDOM
                defaultText="name"
                text={this.state.personalData.name}
              />
              <RenderDOM
                className="text-yellow-400"
                defaultText="email"
                text={this.state.personalData.email}
              />
              <RenderDOM
                defaultText="phoneNo"
                text={this.state.personalData.phoneNo}
              />
            </div>
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
