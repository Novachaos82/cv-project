import { ExperiencePreview } from "./experiencesPreview";
import { PersonalPreview } from "./personalPreview";
import { EducationPreview } from "./educationPreview";
const RenderDOM = (props) => {
  //if (props.expArr) {
  //  console.log(props.expArr);
  //}
  //const { experienceArr } = props;
  //console.log(props.experienceArr);

  return (
    <div>
      <PersonalPreview />
      <ExperiencePreview />
      <EducationPreview />
    </div>
  );
};

export { RenderDOM };
