import { ExperiencePreview } from "./experiencesPreview";
import { PersonalPreview } from "./personalPreview";
const RenderDOM = (props) => {
  //if (props.expArr) {
  //  console.log(props.expArr);
  //}
  //const { experienceArr } = props;
  //console.log(props.experienceArr);

  return (
    <div>
      <ExperiencePreview />
      <PersonalPreview />
    </div>
  );
};

export { RenderDOM };
