import { Drawer } from "antd"
import { Link } from "react-router-dom";
import Buttons from "../../Buttons";

type Props = {
    children: any,
    isDrawerOpen: boolean,
    drawerClose: () => void,
    title: string,
}

const Type1 = ({ children, isDrawerOpen, drawerClose, title }: Props) => {

    const onClose = () => {
        drawerClose();
    };

    return (
        <Drawer
            closeIcon={false}
            placement={"right"}
            onClose={onClose}
            open={isDrawerOpen}
            width='477px'
            zIndex={100}
        >
            <div className="flex justify-between items-center w-full h-[90px] bg-ct-blue-20 pl-6 pr-10">
                <div>
                    <h1 className="text-heading-6 font-medium text-ct-blue-95">{title}</h1>
                    <p className="text-small font-normal text-ct-blue-90-70%">XXXXXXXXXXXXXXXX</p>
                </div>
                <Link to={``}>
                <Buttons.BgHoverBtn
                  title="Edit"
                  paddingY="py-2"
                  paddingX="px-4"
                  borderRadius="rounded-[6px]"
                  textColor="text-secondary-blue-50"
                  fontSize="text-small"
                  fontWeight="font-medium"
                  duration="duration-300"
                  hoverBgColor="hover:bg-white"
                  marginX="mx-2"
                />
              </Link>
            </div>
            {children}
        </Drawer>
    )
}

export default Type1