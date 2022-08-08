import { FaRegEnvelope } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
const PersonalPreview = (props) => {
  return (
    <div>
      <div className="relative flex items-center justify-between border-b-4 border-black py-4 px-2 ">
        <div className="font-bold text-4xl capitalize font-BebasNeue tracking-wide text-cyan-900 ">
          {props.naam}
        </div>
        <div className=" ">
          <div className="capitalize flex  items-center gap-4 ">
            <FaRegEnvelope></FaRegEnvelope>
            <span className="w-36 min-w-fit  text-gray-600">{props.email}</span>
          </div>
          <div className="capitalize flex items-center gap-4 ">
            <FaUserPlus></FaUserPlus>{" "}
            <span className="w-36 min-w-fit  text-gray-600">
              {props.phoneNo}
            </span>
          </div>
        </div>
      </div>

      <div className=" py-2 px-2 text-gray-600">{props.description}</div>
    </div>
  );
};

export { PersonalPreview };
