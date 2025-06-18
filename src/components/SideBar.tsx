import { Menu, PlusIcon } from "lucide-react";
import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onSent, prevPrompt, newChat } = useContext(AppContext);

  return (
    <section
      className={`${
        isOpen ? "w-32 md:w-44" : "w-14"
      } fixed top-0 left-0 z-50 flex flex-col justify-start items-start h-screen bg-[#414141] px-3 sm:px-4 text-white transition-all duration-300 ease-in-out`}
    >
      <div
        className="z-50 text-center flex items-center justify-center hover:cursor-pointer mt-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className=" w-5 h-5" />
      </div>
      <div
        className={`text-white hover:cursor-pointer flex justify-start items-center gap-3 mt-16 ${
          isOpen
            ? "hover:bg-[#2b2b2b] p-2 rounded-lg pr-2 transition-all duration-300"
            : "bg-none"
        }`}
        onClick={() => {
          newChat();
        }}
      >
        <div
          className={` ${
            isOpen
              ? "bg-none"
              : "bg-[#2b2b2b] hover:bg-[#1d1d1d] transition-colors duration-300 p-1  rounded-lg"
          } `}
        >
          {" "}
          <PlusIcon className=" w-5 h-5" />
        </div>
        <p
          className={`font-poppins ${
            isOpen ? "opacity-100 delay-300" : "opacity-0 delay-0"
          } transition-all duration-300 text-[16px] md:text-sm`}
        >
          Another
        </p>
      </div>
      <div
        className={`flex flex-col gap-6 justify-between items-start mt-24 ${
          isOpen ? "opacity-100 delay-300" : "opacity-0 delay-0"
        } transition-all duration-300 `}
      >
        <p className="font-montserrat text-[18px] md:text-xl">Chats</p>
        <div className="flex flex-col text-[14px] md:text-sm gap-4">
          {prevPrompt.map((chat, index) => (
            <p
              key={index}
              className="font-poppin bg-white/30 text-black rounded-md py-1 px-2 hover:bg-white/80 cursor-pointer transition-colors duration-200
              "
              onClick={() => {
                onSent(chat);
                setIsOpen(false);
              }}
            >
              {chat.slice(0, 12)}...
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
