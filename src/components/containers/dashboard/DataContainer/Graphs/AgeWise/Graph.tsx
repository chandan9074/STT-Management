import {
  getTitleColor,
  getValidBgColor,
} from "../../../../../../helpers/Utils";
import { createCollectSimilarPropertyDT } from "../../../../../../types/dashboardTypes";
import GraphTooltip from "../../GraphTooltip";

const Graph = ({ data }: { data: createCollectSimilarPropertyDT[] }) => {
  return (
    <div className="flex flex-col h-full border-l border-blue-gray-20 py-2.5">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-start justify-start group relative ${data.length - 1 === index ? "" : "mb-[32px]"
            }`}
        >
          <div
            className={`absolute bottom-8 -left-6 hidden z-[110] group-hover:block animate-fadeIn`}
          >
            <GraphTooltip
              data={
                data.filter((singleItem) => singleItem.name === item.name)[0]
              }
              validBgColor={`${getValidBgColor(item.name)}`}
              titleColor={`${getTitleColor(item.name, false).split("hover:")[0]
                } bg-clip-text text-transparent`}
              align="left"
            />
          </div>
          <div
            className={`h-3 ${getTitleColor(item.name, false).split("hover:")[0]
              } rounded-r-full`}
            style={{
              width:
                index === 0
                  ? 476
                  : Math.round(
                    (476 * item.contribution) / data[0].contribution
                  ),
            }}
          >
            <div
              className={`w-full h-full opacity-0 group-hover:opacity-100 rounded-r-full duration-300 group-hover:bg-gradient-to-r ${getTitleColor(item.name, false).split("bg-gradient-to-r")[1]
                }`}
            />
          </div>
          <h5 className="text-ct-blue-45 text-small leading-4 ml-2">
            {item.contribution}%
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Graph;
