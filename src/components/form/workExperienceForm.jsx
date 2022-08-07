const WorkExperienceForm = (props) => {
  const { experienceArr } = props;
  console.log();
  return (
    <div>
      {experienceArr.map((valx, index) => {
        return (
          <li key={props.workExperienceDetails.id}>
            <div>
              <input
                name="company"
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={valx.company}
                placeholder="companyInput"
                id="companyInput"
              ></input>
            </div>
          </li>
        );
        {
          /*<div>
          <input
            className="input"
            onChange={props.change}
            placeholder="positionInput"
            id="positionInput"
          ></input>
        </div>
        <div>
          <input
            className="input"
            onChange={props.change}
            placeholder="startDateInput"
            id="startDateInput"
          ></input>
        </div>
        <div>
          <input
            className="input"
            onChange={props.change}
            placeholder="endDateInput"
            id="endDateInput"
          ></input>
        </div>
        <div>
          <input
            className="input"
            onChange={props.change}
            placeholder="descriptionInput"
            id="descriptionInput"
          ></input>
        </div>*/
        }
      })}
    </div>
  );
};

export { WorkExperienceForm };
