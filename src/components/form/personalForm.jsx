const PersonalForm = (props) => {
  return (
    <div>
      <h1 className="title">Personal Info</h1>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="Name"
          id="name"
        ></input>
      </div>
      <div>
        <input
          className="input"
          onChange={props.change}
          placeholder="Email"
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
          placeholder="About"
          id="description"
        ></input>
      </div>
    </div>
  );
};

export { PersonalForm };
