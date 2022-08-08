import React, { Component } from "react";
import { PersonalForm } from "./personalForm";

import { Header } from "./header";
import { Footer } from "./footer";
import uniqid from "uniqid";
import { WorkExperienceForm } from "./workExperienceForm";
import { ExperiencePreview } from "../preview/experiencesPreview";
import { PersonalPreview } from "../preview/personalPreview";
import { EducationForm } from "./educationForm";
import { EducationPreview } from "../preview/educationPreview";
class MainForm extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: "",
        email: "",
        phoneNo: "",
        description: "",
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
      education: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
      },

      educationArray: [
        {
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          startDate: "",
          endDate: "",
          id: uniqid(),
        },
      ],
    };

    this.peronalInfoHandler = this.peronalInfoHandler.bind(this);
    this.workExperienceHandler = this.workExperienceHandler.bind(this);
    this.workExperienceAddHandler = this.workExperienceAddHandler.bind(this);
    this.workExperienceDeleteHandler =
      this.workExperienceDeleteHandler.bind(this);
    this.loadExample = this.loadExample.bind(this);
  }

  peronalInfoHandler = (e) => {
    this.setState({
      personalData: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneNo: document.getElementById("phoneNo").value,
        description: document.getElementById("description").value,
      },
    });
    console.log(e.target.value);
  };

  workExperienceHandler = (index, e) => {
    //console.log(e.target.id);
    //console.log(e.target.value);
    const newValues = [...this.state.workExperienceArray];
    newValues[index][e.target.id] = e.target.value;
    this.setState({ workExperienceArray: newValues });
    console.log(this.state.workExperienceArray);
  };

  educationHandler = (index, e) => {
    //console.log(e.target.id);
    //console.log(e.target.value);
    const newValues = [...this.state.educationArray];
    newValues[index][e.target.id] = e.target.value;
    this.setState({ educationArray: newValues });
    console.log(this.state.educationArray);
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

  educationAddHandler = (e) => {
    e.preventDefault();
    this.setState({
      educationArray: this.state.educationArray.concat(this.state.education),
      education: {
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
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

  educationDeleteHandler = (e) => {
    const dataID = e.target.getAttribute("data-id");
    this.setState({
      educationArray: this.state.educationArray.filter(
        (task) => task.id !== dataID
      ),
    });
    console.log("delete" + e.target.getAttribute("data-id") + "ffffffffff");
  };

  loadExample = (e) => {
    console.log("click");
    e.preventDefault();
    this.setState({
      personalData: {
        name: (document.getElementById("name").value = "Lena Shelton "),
        email: (document.getElementById("email").value = "Qmab555@gmail.com"),
        phoneNo: (document.getElementById("phoneNo").value = "940-342-4919"),
        description: (document.getElementById("description").value =
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem illum velit, aliquid inventore beatae cum voluptates veniam autem perferendis nesciunt quas ipsum necessitatibus quis iste aliquam amet! Id, ad illo."),
      },

      workExperienceArray: [
        {
          company: "Microsoft",
          position: "Software Engineer",
          startDate: "2019",
          endDate: "2020",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, pariatur consectetur nobis est voluptate delectus, voluptatum rerum tenetur facere nemo deleniti? Veniam rem fugit voluptatum, nesciunt molestiae quidem eveniet, obcaecati magnam esse voluptate, quisquam at mollitia qui blanditiis rerum laboriosam? ",
          id: uniqid(),
        },
      ],

      educationArray: [
        {
          universityName: "Boston College",
          city: "Milan",
          degree: "B.Tech",
          subject: "CSE",
          startDate: "2017",
          endDate: "2019",
          id: uniqid(),
        },
      ],
    });
  };

  reload = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Header />

        {/*the form */}

        <div
          id="mainContent"
          className="grid grid-cols-1  space-y-8 justify-center  mx-auto my-0 p-24 lg:grid-cols-[800px_minmax(600px,_600px)] md:gap-4 md:space-y-0 w-full bg-slate-800 overflow-y-scroll"
        >
          <div className="flex-row rounded-md bg-custom-black  w-full p-4  justify-center items-center text-white">
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
            <div>
              <EducationForm
                change={this.educationHandler}
                educationArr={this.state.educationArray}
                workExperienceDetails={this.state.education}
                addClick={this.educationAddHandler}
                deleteClick={this.educationDeleteHandler}
              />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <div>
                <button
                  className="misc-btn bg-green-500"
                  onClick={this.loadExample}
                >
                  Load Example
                </button>
              </div>
              <div>
                <button className="misc-btn bg-red-500" onClick={this.reload}>
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/*CV PREVIEW*/}

          <div className="flex-row rounded-md bg-gray-300 h-fit w-full p-8  justify-center items-center ">
            <div>
              <PersonalPreview
                naam={this.state.personalData.name}
                email={this.state.personalData.email}
                phoneNo={this.state.personalData.phoneNo}
                description={this.state.personalData.description}
              />

              <div className="description-heading">Experience</div>
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

              <div className="description-heading">Education</div>
              {this.state.educationArray.map((obj, index) => {
                return (
                  <div key={index}>
                    <EducationPreview
                      universityName={obj.universityName}
                      city={obj.city}
                      degree={obj.degree}
                      subject={obj.subject}
                      startDate={obj.startDate}
                      endDate={obj.endDate}
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
