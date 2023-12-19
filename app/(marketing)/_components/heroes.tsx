import Image from "next/image";

const Heroes = () => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-5xl ">
      <div className=" flex items-center">
        <div className=" aspect-square relative w-[300px] h-[300px] sm:w-[350px] md:w-[400px]">
          <Image
            src="/documents.png"
            fill
            className="object-contain block dark:hidden"
            alt="Documents"
          />
          <Image
            src="/documents-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className=" relative hidden md:block h-[400px] aspect-square ">
          <Image
            src="/reading-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
          <Image
            src="/reading.png"
            fill
            className="object-contain block dark:hidden"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
