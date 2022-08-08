const WorkExperienceForm = (props) => {
  const { experienceArr } = props;
  console.log();
  return (
    <div>
      {experienceArr.map((obj, index) => {
        return (
          <li className="list-none" key={obj.id}>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.company}
                placeholder="companyInput"
                id="company"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.position}
                placeholder="positionInput"
                id="position"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.startDate}
                placeholder="startDateInput"
                id="startDate"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.endDate}
                placeholder="endDateInput"
                id="endDate"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.description}
                placeholder="descriptionInput"
                id="description"
              ></input>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export { WorkExperienceForm };
