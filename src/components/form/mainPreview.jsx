const RenderDOM = (props) => {
  //if (props.expArr) {
  //  console.log(props.expArr);
  //}
  return (
    <div>
      <div>
        <label className={props.className}>
          {props.defaultText} {props.text}{" "}
        </label>
      </div>
      {/*<div>{props.work}</div>*/}
    </div>
  );
};

export { RenderDOM };
