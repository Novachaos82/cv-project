const EducationPreview = (props) => {
  return (
    <div>
      <div className="flex p-2 text-lg font-semibold" key={props.id}>
        <div className="flex-1 flex gap-32">
          <div>
            <div className="">{props.universityName},</div>
            <div className="">{props.city}.</div>
          </div>
          <div>
            <div className="">
              Degree:<span className=" ml-2 font-light">{props.degree}</span>
            </div>
            <div className="">
              Subject:<span className="ml-2 font-light">{props.subject}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-9 min-w-fit">{props.startDate}</div>
          <div>-</div>
          <div className="w-9 min-w-fit">{props.endDate}</div>
        </div>
      </div>
    </div>
  );
};

export { EducationPreview };
