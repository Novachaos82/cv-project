const PersonalForm = (props) => {
  return (
    <div>
      <h1 className="title">Personal Info</h1>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="name"
          id="name"
        ></input>
      </div>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="email"
          id="email"
        ></input>
      </div>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="phoneNo"
          id="phoneNo"
        ></input>
      </div>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="description"
          id="description"
        ></input>
      </div>
    </div>
  );
};

export { PersonalForm };
