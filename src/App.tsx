import { Skeleton, SkeletonCircle } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/global/Header";

function App() {
  return (
    <div className="md:px-[87px] px-[30px] w-full">
      <Header />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[47px] mt-[10rem] py-10">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col gap-y-[25px] w-full">
            <span className="flex items-center gap-x-[11px]">
              <SkeletonCircle rounded={"full"} height={"45px"} width={"45px"} />
              <Skeleton rounded={"full"} height={"45px"} width={"320px"} />
            </span>
            <Skeleton rounded={"xl"} height={"338px"} width={"full"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
