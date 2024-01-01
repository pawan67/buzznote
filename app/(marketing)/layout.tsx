import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen  relative dark:bg-[#181818]">
      <Navbar />
      <main className="min-h-screen py-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
