import Image from "next/image";

const Heroes = () => {
  return (
    <div className=" flex flex-col items-center justify-center max-w-3xl ">
      <div className=" flex items-center">
        <div className="   ">
          <img
            src="/hero_xmas-rev.webp"
            className="object-contain block "
            alt="Documents"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
