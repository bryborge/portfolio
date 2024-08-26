import HouseIcon from "../../Icons/HouseIcon";
import MailIcon from "../../Icons/MailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
// import { metadata } from "@/app/layout";

/**
 * Renders the ContactMe component with contact information.
 *
 * @return {JSX.Element} The rendered ContactMe component.
 */
const ContractMe = (): JSX.Element => {
  return (
    <div>
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Contact
      </h6>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-current">
          <HouseIcon />
        </span>
        Portland, OR 97213, US
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-current">
          <MailIcon />
        </span>
        bryborge@gmail.com
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-current">
          <PhoneIcon />
        </span>
        +1 (360) 713-4088
      </p>
    </div>
  );
}

export default ContractMe;
