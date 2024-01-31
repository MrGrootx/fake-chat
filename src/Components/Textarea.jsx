const Textarea = () => {
  return (
    <div>
      <div className="mt-2">
        <div>
          <h3 className="font-semibold text-gray-200">Me</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="My Message"
            className=" p-1 rounded w-full outline-none font-semibold"
          ></textarea>
        </div>
      </div>

      <div className="mt-2">
        <div>
          <h3 className="font-semibold text-gray-200">Other</h3>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Other's Message"
            className=" p-1 rounded w-full outline-none font-semibold"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
