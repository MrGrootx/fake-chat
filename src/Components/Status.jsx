import PropTypes from "prop-types";
const Status = (props) => {
  const { handleFunction } = props;
  return (
    <div>
      <div className="status flex gap-x-2 items-center">
        <label htmlFor="online" className="font-semibold text-gray-200">
          <input
            type="radio"
            name="status"
            className="mr-2"
            id="online"
            value="Online"
            onChange={handleFunction}
          />
          Online
        </label>
        <label htmlFor="offline" className="font-semibold text-gray-200">
          <input
            type="radio"
            name="status"
            className="mr-2"
            id="offline"
            value="Offline"
            onChange={handleFunction}
          />
          Offline
        </label>
      </div>
    </div>
  );
};

export default Status;

Status.propTypes = {
  handleFunction: PropTypes.func,
};
