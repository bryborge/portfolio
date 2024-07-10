import HouseIcon from "../../Icons/HouseIcon";
import MailIcon from "../../Icons/MailIcon";
import PhoneIcon from "../../Icons/PhoneIcon";
import { metadata } from "@/app/layout";

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
        { metadata.other?.contactAddress?.toString() }
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-current">
          <MailIcon />
        </span>
        { metadata.other?.contactEmail?.toString() }
      </p>
      <p className="mb-4 flex items-center justify-center md:justify-start">
        <span className="me-3 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-current">
          <PhoneIcon />
        </span>
        { metadata.other?.contactPhone?.toString() }
      </p>
    </div>
  );
}

export default ContractMe;
