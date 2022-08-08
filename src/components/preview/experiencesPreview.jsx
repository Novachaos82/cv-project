const ExperiencePreview = (props) => {
  return (
    <div>
      <div className="" key={props.id}>
        <label className="block">{props.company}</label>
        <label className="block">{props.position}</label>
        <label className="block">{props.startDate}</label>
        <label className="block">{props.endDate}</label>
        <label className="block">{props.description}</label>
      </div>
    </div>
  );
};

export { ExperiencePreview };
