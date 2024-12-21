import Image from "next/image";
import Header from "./appComponents/Header";
import MainArea from "./appComponents/MainArea";
import Sidebar from "./appComponents/Sidebar";

export default function Home() {
  return (

    <>
    <Header />
    <div className=" h-[88vh] w-full flex justify-center items-center">

      {/* <div className="min-h-screen w-[20%]"> */}
        <Sidebar />
      {/* </div> */}

      {/* <div className="h-full w-[80%]"> */}
        <MainArea />
      {/* </div> */}

    </div>

    </>
  );
}
