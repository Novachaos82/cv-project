const WorkExperienceForm = (props) => {
  const { experienceArr } = props;
  return (
    <div>
      <h1 className="title">Experiences</h1>
      {experienceArr.map((obj, index) => {
        return (
          <li className="list-none" key={obj.id} data-id={obj.id}>
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
            <button
              className="btn border-green-500 text-green-500 hover:bg-green-500"
              onClick={(e) => props.addClick(e)}
            >
              add
            </button>
            {experienceArr.length > 1 ? (
              <button
                className="btn text-red-500 border-red-500 hover:bg-red-500"
                data-id={obj.id}
                onClick={(e) => props.deleteClick(e)}
              >
                delete
              </button>
            ) : (
              ""
            )}
          </li>
        );
      })}
    </div>
  );
};

export { WorkExperienceForm };
