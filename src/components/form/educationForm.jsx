const EducationForm = (props) => {
  const { educationArr } = props;

  return (
    <div>
      <h1 className="title">Education</h1>
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
                placeholder="University-Name"
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
                placeholder="City"
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
                placeholder="Degree"
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
                placeholder="Subject"
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
                placeholder="Start-Date"
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
                placeholder="End-Date"
                id="endDate"
              ></input>
            </div>
            <button
              className="btn  border-green-500 text-green-500 hover:bg-green-500"
              onClick={(e) => props.addClick(e)}
            >
              add
            </button>
            {educationArr.length > 1 ? (
              <button
                className="btn  text-red-500 border-red-500 hover:bg-red-500"
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

export { EducationForm };
