import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative dark:bg-[#181818]">
      <Navbar />
      <main className="h-full pt-10">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
