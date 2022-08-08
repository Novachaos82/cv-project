const EducationPreview = (props) => {
  return (
    <div>
      <li className="" key={props.id}>
        <label className="block">{props.universityName}</label>
        <label className="block">{props.city}</label>
        <label className="block">{props.degree}</label>
        <label className="block">{props.subject}</label>
        <label className="block">{props.startDate}</label>
        <label className="block">{props.endDate}</label>
      </li>
    </div>
  );
};

export { EducationPreview };
