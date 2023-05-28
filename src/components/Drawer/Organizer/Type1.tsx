import { Drawer } from "antd"
import { Link } from "react-router-dom";
import Buttons from "../../Buttons";
import { Dispatch, SetStateAction } from "react";

type Props = {
    children: any,
    isDrawerOpen: boolean,
    headerBgColor: string,
    title: string,
    setIsDrawerClose: Dispatch<SetStateAction<boolean>>;
    isEdit: boolean;
    handleEdit?: () => void;
}

const Type1 = ({ children, isDrawerOpen, title, headerBgColor, setIsDrawerClose, isEdit, handleEdit }: Props) => {

    const onClose = () => {
        setIsDrawerClose(false);
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
            <div className={`flex justify-between items-center w-full h-[90px] ${headerBgColor} px-6 pt-2`}>
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-heading-6 leading-[23.4px] font-medium text-ct-blue-95">{title}</h1>
                    <p className="text-small leading-[16.8px] font-normal text-ct-blue-90-70%">XXXXXXXXXXXXXXXX</p>
                </div>
                {
                    isEdit &&
                    <Link to={``}>
                        <Buttons.BgHoverBtn
                            onClick={handleEdit}
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
                }
            </div>
            {children}
        </Drawer>
    )
}

export default Type1