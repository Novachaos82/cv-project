const EducationForm = (props) => {
  const { educationArr } = props;

  return (
    <div>
      {educationArr.map((obj, index) => {
        return (
          <li className="list-none" key={obj.id} data-id={obj.id}>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.universityName}
                placeholder="universityNameInput"
                id="universityName"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.city}
                placeholder="cityInput"
                id="city"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.degree}
                placeholder="degreeInput"
                id="degree"
              ></input>
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  props.change(index, e);
                }}
                value={obj.subject}
                placeholder="subjectInput"
                id="subject"
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
            <button onClick={(e) => props.addClick(e)}>add</button>
            {educationArr.length > 1 ? (
              <button data-id={obj.id} onClick={(e) => props.deleteClick(e)}>
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

export { EducationForm };
