import HeroSection from "./components/HeroSection";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-[#2c2c2c] min-h-screen w-full flex justify-start items-center">
      <SideBar />
      <HeroSection />
    </div>
  );
}

export default App;
