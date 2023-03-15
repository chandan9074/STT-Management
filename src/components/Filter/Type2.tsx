import { useEffect, useState } from "react";
import Icons from "../../assets/Icons";
import { targetFilterDT } from "../../types/assignTypes";
import { FilterDT } from "../../types/script";
import Buttons from "../Buttons";
import Dropdown from "../Dropdown";

type Props = {
    filterData: targetFilterDT;
    align?: "center" | "left" | "right";
    current: string;
    // filterList: targetFilterDT;
    count: number;
}

const Type2 = ({ filterData, align, current, count }: Props) => {
    const [open, setOpen] = useState(false);
    const [currentState, setCurrentState] = useState<string>(current);
    
    return (
        <div>Type2</div>
    )
}

export default Type2