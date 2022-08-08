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

          <div className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quis fugiat in saepe deleniti accusamus accusantium alias a
            consequuntur! Porro repellendus ea doloribus ducimus molestiae harum
            perferendis ipsum. Obcaecati maxime ullam officia commodi similique
            dolore est ab veritatis delectus temporibus natus assumenda, saepe
            iure architecto a nihil tempore perferendis mollitia reprehenderit
            quaerat tempora. Corporis numquam modi ipsa labore officiis quia
            consequatur cumque ea id iusto corrupti, odio autem architecto
            doloribus amet aperiam similique saepe rem et veritatis voluptas
            molestias inventore. Cumque accusamus doloremque in est nostrum
            eveniet ea nulla a.
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperiencePreview };
