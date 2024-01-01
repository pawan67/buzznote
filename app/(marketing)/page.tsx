import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div className="  min-h-screen flex flex-col">
      <div className=" flex flex-col items-center justify-center md:justify-center text-center gap-y-8 flex-1 px-6 pb-10">
        
        <Heroes />
        <Heading />
      </div>
    </div>
  );
};

export default MarketingPage;
