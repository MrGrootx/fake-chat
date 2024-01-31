const NetWork = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-2 mt-1">
        <div className="">
          <select
            name="status"
            id="status"
            className=" outline-none text-sm rounded  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white "
          >
            <option value="4G">4G</option>
            <option value="3G">3G</option>
            <option value="2G">2G</option>
            <option value="Wifi">Wifi</option>
          </select>
        </div>
        <div className="">
          <div className="">
            <input
              type="time"
              name="time"
              className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>

        <div className="">
          <div className="">
            <input
              type="date"
              name="date"
              className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetWork;
