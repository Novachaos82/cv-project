const ExperiencePreview = (props) => {
  return (
    <div>
      <div>
        <div className="p-2 " key={props.id}>
          <div className="flex gap-2 text-xl font-semibold">
            <div className="flex-1">{props.position}</div>
            <div className="">{props.company}</div>
            <span>|</span>

            <div className="flex gap-2">
              <div className="w-9 min-w-fit">{props.startDate}</div>
              <div>-</div>
              <div className="w-9 min-w-fit">{props.endDate}</div>
            </div>
          </div>

          <div className="flex flex-col mt-4 text-gray-600 ">
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperiencePreview };
