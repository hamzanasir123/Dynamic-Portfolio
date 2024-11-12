import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
  <>
  <div className="grid sm:grid-cols-3">
    <div className="col-span-1 ml-[10px]">
  <Sidebar/>
    </div>
    <div className="flex flex-wrap col-span-2">
    <Navbar/>
    </div>
  
  </div>
  </>
  );
}
