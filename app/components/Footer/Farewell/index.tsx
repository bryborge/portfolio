import HeartIcon from "../../Icons/HeartIcon";

/**
 * Renders the Farewell component to display a thank you message.
 *
 * @return {JSX.Element} The rendered Farewell component.
 */
const Farewell = (): JSX.Element => {
  return (
    <div>
      <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
        <span className="me-3 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-current">
          <HeartIcon />
        </span>
        Thanks for visiting
      </h6>
      <p>
        If you have any questions or comments, please feel free to reach out.
      </p>
    </div>
  );
}

export default Farewell;
