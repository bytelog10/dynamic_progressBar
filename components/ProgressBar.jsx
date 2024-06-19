"use client"
import Image from "next/image";
import {motion , useScroll, useTransform} from "framer-motion"

const ProgressBar = () => {

  const {scrollYProgress} = useScroll()
  const background = useTransform(
    scrollYProgress,
    [0,  1],
    ["#7c3aed","#2563eb"]
  )
  return (
    <div className="-z-10 inset-0 h-full w-full  bg-[linear-gradient(to_right,#00000012_2px,transparent_1px),linear-gradient(to_bottom,#00000012_2px,transparent_1px)] bg-[size:52px_52px]">
      <motion.div
        style={{
          background,
          scaleX: scrollYProgress,
          position: "sticky",
          top: 0,
          transformOrigin: "left",
          height: '10px',
          zIndex:10
      }}
      />
      <div className=" flex flex-col gap-5 pb-10 max-w-5xl m-auto p-5 text-gray-900" >
        <h1 className=" text-7xl leading-[1.2] font-extrabold mb-4 capitalize bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          Dynamic Scrolling Effects with Framer Motion in Nextjs</h1>
        <div className=" h-full w-full ">
          <Image src='/coding.jpg' alt='title' width={1280} height={500} className=" rounded-lg shadow my-4" />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className=" flex justify-between gap-x-4 items-center">
          <div className=" relative h-[260px] w-[250px] flex-1">
            <Image src='/coding.jpg' alt='title' fill className=" rounded-lg" />
          </div>
          <div className=" flex-1">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className=" flex justify-between gap-x-4 items-center">

          <div className=" flex-1">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </p>
          </div>
          <div className=" relative h-[260px] w-[250px] flex-1">
            <Image src='/coding.jpg' alt='title' fill className=" rounded-lg" />
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
