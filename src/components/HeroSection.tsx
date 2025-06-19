import { useContext } from "react";
import AppContext from "../context/AppContext";
import { SendHorizonal } from "lucide-react";
import Tesseract from "./ui/Tesseract";
import "../css/loader.css";

const HeroSection = () => {
  const { onSent, setInput, input, showResult, result, userQuestion, loading } =
    useContext(AppContext);

  return (
    <section
      className={`relative ml-12 text-white flex flex-col justify-start items-center w-full min-h-screen  py-10 bg-[#1E1E1E]`}
    >
      <span className="absolute top-8 right-6 font-orbitron text-shadow-lg tracking-wider text-lg lg:text-xl">
        Nexora
      </span>
      {!showResult ? (
        <div>
          <Tesseract />
        </div>
      ) : (
        <div className=" inline-block">
          <p className="bg-[#414141] mt-12 inline-block w-auto max-w-[50vw] break-words mb-4 md:mb-6 text-white py-2 px-4 rounded-xl font-poppins text-[14px] md:text-sm">
            {userQuestion}
          </p>
        </div>
      )}
      {loading ? (
        <div className="loader">
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
        <div
          className={`  ${
            showResult ? "block" : "hidden"
          } w-auto max-w-[84%] sm:max-w-[79%]  lg:max-w-[67%] pb-14`}
        >
          <p
            dangerouslySetInnerHTML={{ __html: result }}
            className="inline-block leading-[30px] whitespace-pre-wrap text-white py-2 px-4 rounded-xl font-poppins text-[14px] md:text-sm"
          ></p>
        </div>
      )}
      <div className="fixed bottom-8 z-10 w-full flex justify-center items-center bg-[#1E1E1E]">
        {" "}
        <div className="relative w-9/12 lg:w-[65%]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(eventObj) => {
              if (eventObj.key === "Enter") {
                onSent();
              }
            }}
            className="py-4 bg-[#1E1E1E] border border-[#414141] rounded-xl px-4 pe-12 w-full text-sm font-poppins text-white focus:outline-none focus:border-white/50 transition-colors duration-200"
          />
          <SendHorizonal
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
            onClick={() => onSent()}
          />
        </div>
      </div>
      <div className="fixed bottom-0 bg-[#1E1E1E] w-full py-2 ">
        <p className="text-white/50 font-inter font-normal text-[14px] text-center italic">
          Start the Conversation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
