import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Forth = ({ children }: { children: any }) => {
  return (
    <div>
      <Navbar.Primary />
      <Sidebar.Primary />
      <div className="pt-20 pl-20 relative pr-3 pb-6 bg-[#F4F7FA]">
        {children}
      </div>
    </div>
  );
};

export default Forth;
