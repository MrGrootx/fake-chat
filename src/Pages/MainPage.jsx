import NetWork from "../Components/NetWork";
import Textarea from "../Components/Textarea";
import icon from "../assets/profile.png";
import WhatsAppUI from "../layouts/WhatsAppUI";
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
                    <NetWork />

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
                    <Textarea />
                  </div>
                </div>
              </div>
            </section>

            <section className="border">
               <div className="m-2 ">
                  <WhatsAppUI/>
               </div>
            </section>


          </div>
        </div>
      </section>
    </>
  );
};
