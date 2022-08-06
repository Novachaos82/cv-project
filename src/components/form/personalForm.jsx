const Personal = (props) => {
  return (
    <div className="flex-row ">
      <input
        className="border-2 border-cyan-500"
        onChange={props.change}
        placeholder="name"
        id="name"
      ></input>
      <input
        className="border-2 border-cyan-500"
        onChange={props.change}
        placeholder="email"
        id="email"
      ></input>
      <input
        className="border-2 border-cyan-500"
        onChange={props.change}
        placeholder="phoneNo"
        id="phoneNo"
      ></input>
    </div>
  );
};

export { Personal };
