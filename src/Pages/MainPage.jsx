import icon from "../assets/profile.png";
export const MainPage = () => {
  return (
    <>
      <section className="bg-ctm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-x-2 p-3">
            <section className="border">
              <div className="max-w-[500px] mx-auto m-3 p-2 rounded bg-[#176B87]">
                <div>
                  <h2 className="font-semibold text-white text-center">
                    Person
                  </h2>
                  <div className="flex items-center gap-x-1 justify-center shadow-lg">
                    <div>
                      <div className="flex items-center justify-center bg-grey-lighter ">
                        <label className=" flex flex-col items-center p-3 py-2 py-  text-blue rounded-lg tracking-wide uppercase  cursor-pointer hover:bg-blue ">
                          <img src={icon} className="w-12" alt="" />
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        placeholder="Name"
                        className="outline-none rounded px-2 py-1"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="font-semibold text-gray-200">
                      Network & Time
                    </span>
                    <div className="grid grid-cols-2 gap-x-2 mt-1">
                      <div className="">
                        <select
                          name=""
                          className=" outline-none bordertext-sm rounded  block w-full p-2.5 bg-gray-700 placeholder-gray-400 dark:text-white "
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
                            name=""
                            className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                            value="16:32:55"
                          />
                        </div>
                      </div>
                     {/* radio */}
                      <div className="mt-2">
                        <h4 className="font-semibold text-gray-200">Status</h4>
                        <div className="status flex gap-x-2 items-center">
                          <label
                            htmlFor="online"
                            className="font-semibold text-gray-200"
                          >
                            <input
                              type="radio"
                              name="status"
                              className="mr-2"
                              id="online"
                            />
                            Online
                          </label>
                          <label
                            htmlFor="offline"
                            className="font-semibold text-gray-200"
                          >
                            <input
                              type="radio"
                              name="status"
                              className="mr-2"
                              id="offline"
                            />
                            Offline
                          </label>
                        </div>
                      </div>

                     {/* textarea */}

                    
                    </div>

                    {/* textarea */}
                    <div className="mt-2">
                        <div>
                           <h3 className="font-semibold text-gray-200">Me</h3>
                        <textarea name="" id="" cols="30" rows="3" placeholder="My Message" className=" p-1 rounded w-full outline-none font-semibold"></textarea>
                        </div>
                     </div>

                     <div className="mt-2">
                        <div>
                           <h3 className="font-semibold text-gray-200">Other</h3>
                        <textarea name="" id="" cols="30" rows="3" placeholder="Other's Message" className=" p-1 rounded w-full outline-none font-semibold"></textarea>
                        </div>
                     </div>

                  </div>
                </div>
              </div>
            </section>
            <section className="border">1</section>
          </div>
        </div>
      </section>
    </>
  );
};
