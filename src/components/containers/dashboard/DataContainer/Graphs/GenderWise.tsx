import React from 'react';
import PercentiseCard from "../../../../common/PercentiseCard";

const GenderWise = () => {
    return (
        <div className="px-5">
            <div className="grid grid-cols-12 gap-2.5">
                <div className="col-span-6">
                    <PercentiseCard
                        name="Male"
                        value={60}
                        hour={400}
                        BorderColor="border-b-bright-turquoise"
                    />
                </div>
                <div className="col-span-6">
                    <PercentiseCard
                        name="Female"
                        value={50}
                        hour={300}
                        BorderColor="border-b-your-pink"
                    />
                </div>
            </div>

        </div>
    );
};

export default GenderWise;