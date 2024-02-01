import { useState } from "react";
import Textarea from "../Components/Textarea";
import icon from "../assets/profile.png";
import WhatsAppUI from "../layouts/WhatsAppUI";
import SetTime from "../Components/SetTime";
import NetWork from "../Components/NetWork";

export const MainPage = () => {

  // Creating a Object using useState() Function and setting default values
  const [Person, SetContent] = useState({
    person: "Abishek",
    status: "online",
    network: "wifi",
    time: "12:00 PM",
    myMessage: "This me My Message",
    friendMessage: "This is Friend Message",
  });

  function changeFunc(e) {
    const name = e.target.name;
    // console.log(name);
    const value =
      e.target.type === "checked" ? e.target.checked : e.target.value;
      SetContent({ ...Person, [name]: value });
  }

  return (
    <>
      <section className="bg-ctm">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2  gap-x-2 p-3">
            <section className="">
              <div className="md:max-w-[500px] w-full mx-auto m-3 p-2 rounded bg-[#176B87]">
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
                    <div className=" overflow-hidden inline-block">
                      <input
                        type="text"
                        name="person"
                        placeholder="Name of the Person"
                        onChange={changeFunc}
                        className="outline-none rounded px-2 py-1 inline-block"
                        maxLength="10"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="font-semibold text-gray-200">
                      Network & Time
                    </span>


                    {/* NetworkSelect Start */}
                    <div>
                      <div className="grid grid-cols-3 gap-x-2 mt-1">
                        {/* <div className="">
                          <select
                            name="network"
                            id="networknwt"
                            onChange={changeFunc}
                            className=" outline-none text-sm rounded  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white "
                          >
                            <option value="Wifi">Wifi</option>
                            <option value="4G">4G</option>
                            <option value="3G">3G</option>
                            <option value="2G">2G</option>
                          </select>
                        </div> */}
                        <NetWork handleFunction={changeFunc}/>
                        <div className="">
                                {/* Time Components */}
                          <SetTime PersonDetails={Person} handleFunction={changeFunc}/>
                        </div>

                        <div className="">
                          <div className="">
                            <input
                              type="date"
                              onChange={changeFunc}
                              // name="time"
                              className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* NetworkSelect End */}

                    

                    {/* radio WORKING */}
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
                            value="Online"
                            onChange={changeFunc}
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
                            value="Offline"
                            onChange={changeFunc}
                          />
                          Offline
                        </label>
                      </div>
                    </div>

                    {/* textarea */}
                    <Textarea handleFunction={changeFunc} PersonDetails={Person}  />
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              <div className="m-2 ">
                <WhatsAppUI PersonDetails={Person} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
