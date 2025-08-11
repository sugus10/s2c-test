import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import shape_icon from "../../public/new-img/shape-svg.svg";
import CursorCircle from "./CursorCircle";

function AboutUs() {
  return (
    <div className="w-full h-[240svh] relative overflow-hidden bg-blue-900">
      <CursorCircle />
      <div className="h-[32rem] w-[48rem] absolute top-[30svh] left-1/2 -translate-x-1/2 bg-white rounded-md z-[15] shadow p-4">
        <div className="w-full h-full flex items-center justify-center bg-white rounded-md">
          <h1 className="text-[2.6rem] font-extrabold text-center max-w-[40rem] w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1C398E]">
            Explore Innovations – Where Ideas Turn Into Software
          </h1>
          <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[7rem] font-medium text-[2.4rem] font-satisfy text-center leading-[2.7rem] text-[#F7A321]">
            Solutions crafted <br /> with love
          </p>
        </div>
      </div>
      <div className="h-[30rem] w-[46rem] absolute top-[30svh] left-1/2  translate-y-[1rem] -translate-x-[65%] bg-white rounded-md z-[14] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        ></div>
      </div>
      <div className="h-[28rem] w-[44rem] absolute top-[30svh] left-1/2 translate-y-[2rem] -translate-x-[80%] bg-white rounded-md z-[13] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        ></div>
      </div>
      <div className="h-[26rem] w-[42rem] absolute top-[30svh] left-1/2 translate-y-[3rem] -translate-x-[95%] bg-white rounded-md z-[12] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-6.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        ></div>
      </div>
      <div className="h-[24rem] w-[40rem] absolute top-[30svh] left-1/2 translate-y-[4rem] -translate-x-[110%] bg-white rounded-md z-[11] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        >
          s
        </div>
      </div>
      {/* right section */}
      <div className="h-[30rem] w-[46rem] absolute top-[30svh] left-[50%] -translate-x-[35%] translate-[1rem]  bg-white rounded-md z-[14] shadow p-4">
        {" "}
        <div
          className="w-full h-full bg-white rounded-md"
          style={{
            backgroundImage: "url('/new-img/im-6.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="h-[28rem] w-[44rem] absolute top-[30svh] left-[50%] -translate-x-[20%] translate-y-[2rem]  bg-white rounded-md z-[13] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        >
          s
        </div>
      </div>
      <div className="h-[26rem] w-[42rem] absolute top-[30svh] left-[50%] -translate-x-[5%] translate-y-[3rem] bg-white rounded-md z-[12] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        >
          s
        </div>
      </div>
      <div className="h-[24rem] w-[40rem] absolute top-[30svh] left-[50%]  -translate-x-[-10%] translate-y-[4rem]  bg-white rounded-md z-[11] shadow p-4">
        {" "}
        <div
          style={{
            backgroundImage: "url('/new-img/im-4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-white rounded-md"
        >
          s
        </div>
      </div>
      <div className="w-full absolute bottom-[15svh] p-50 h-[80svh] ">
        <div className="w-full relative flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            className="w-[150px] z-[999]  h-[150px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[16rem]"
          >
            <Image
              src="/new-img/shape.svg"
              alt="shape"
              width={150}
              height={150}
            />
          </motion.div>
          <h1 className="text-center  text-white leading-[3.4rem] font-bold text-[2.6rem]   w-full">
            Looking back to where <br /> it all begans
          </h1>
          <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 leading-[12rem]  w-full">
            <h1 className="text-[14rem] font-black">OUR</h1>
            <h1 className="text-[14rem] font-black">WORLD</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
