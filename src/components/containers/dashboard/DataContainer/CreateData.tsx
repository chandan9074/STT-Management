import React, {useState} from 'react';
import Header from "./Header";
import {Button, Modal} from "antd";
import Type3 from "../../../Table/Type3";
import Table from "../../../Table";
import DistributionModal from "./DistributionModal";
import Icons from "../../../../assets/Icons";
import DistributionSourceDropdown from "./DistributionSourceDropdown";

const CreateData = () => {

    return (
        <div>
            <Header
                type="Create"
                bgColor="bg-green-05"
                targetColor="text-green/50-05956F"
            />
            <div className="flex justify-between my-5">
                <DistributionSourceDropdown/>
                <DistributionModal/>
            </div>


        </div>
    );
};

export default CreateData;