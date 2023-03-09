import Navbar from '../Navbar';
import Sidebar from '../Sidebar';


const Sixth = ({ children }: { children: any }) => {
    // const location = useLocation();

    return (
        <div>
            <Navbar.Secondary />
            <Sidebar.Primary />w
            <div className={`relative pl-[72px] pb-6 h-[100%] bg-default pt-9`}>
                {children}
            </div>
        </div>
    );
};

export default Sixth;