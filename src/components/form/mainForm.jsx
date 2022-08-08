import React, { Component } from "react";
import { PersonalForm } from "./personalForm";

import { Header } from "./header";
import { Footer } from "./footer";
import uniqid from "uniqid";
import { WorkExperienceForm } from "./workExperienceForm";
import { ExperiencePreview } from "../preview/experiencesPreview";
import { PersonalPreview } from "../preview/personalPreview";

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
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        id: uniqid(),
      },

      workExperienceArray: [
        {
          company: "",
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
    this.workExperienceDeleteHandler =
      this.workExperienceDeleteHandler.bind(this);
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

  workExperienceHandler = (index, e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    const newValues = [...this.state.workExperienceArray];
    newValues[index][e.target.id] = e.target.value;
    this.setState({ workExperienceArray: newValues });
    console.log(this.state.workExperienceArray);
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

  workExperienceDeleteHandler = (e) => {
    const dataID = e.target.getAttribute("data-id");
    this.setState({
      workExperienceArray: this.state.workExperienceArray.filter(
        (task) => task.id !== dataID
      ),
    });
    console.log("delete" + e.target.getAttribute("data-id") + "ffffffffff");
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
                addClick={this.workExperienceAddHandler}
                deleteClick={this.workExperienceDeleteHandler}
              />
            </div>
          </div>
          <div className="fields">
            <div>
              <h1 className="title">Personal experience</h1>
              <PersonalPreview
                naam={this.state.personalData.name}
                email={this.state.personalData.email}
                phoneNo={this.state.personalData.phoneNo}
              />

              {this.state.workExperienceArray.map((obj, index) => {
                return (
                  <div key={index}>
                    <ExperiencePreview
                      company={obj.company}
                      position={obj.position}
                      startDate={obj.startDate}
                      endDate={obj.endDate}
                      description={obj.description}
                      id={obj.id}
                    />
                  </div>
                );
              })}
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
