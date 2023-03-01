import { distributionSourceWiseDT } from "../../../../../../types/dashboardTypes";
import {
  getTitleColor,
  getValidBgColor,
} from "../../../../../../helpers/Utils";
import SecondaryGraphTooltip from "../../SecondaryGraphTooltip";

type Props = {
  data: distributionSourceWiseDT[];
  maxTarget: number;
  graphWidth: number;
};

const Graph = ({ data, maxTarget, graphWidth }: Props) => {
  // const handleColor = (value: string) => {
  //   return "bg-green-500";
  // };
  return (
    <div className="flex border-l border-blue-gray-20 py-2.5">
      <div className="w-full flex flex-col my-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full flex items-center ${data.length - 1 === index ? "" : "mb-8"
              }`}
          >
            <div
              className="flex items-center"
              style={{
                width: Math.round(graphWidth * item.target) / maxTarget,
              }}
            >
              <div
                className={`w-full h-3 rounded-r-full group duration-300 ${getTitleColor(
                  item.name,
                  false
                )}`}
              >
                <div
                  className={`h-3 relative rounded-r-full duration-300 flex justify-center ${getTitleColor(item.name, true).split(" ")[2]
                    }`}
                  style={{ width: `${item.achieved}%` }}
                >
                  <div
                    className={`absolute bottom-7 hidden z-[110] group-hover:block animate-fadeIn`}
                  // style={{ left: `calc(100% - 40px)` }}
                  >
                    <SecondaryGraphTooltip
                      data={
                        data.filter(
                          (singleItem) => singleItem.name === item.name
                        )[0]
                      }
                      validBgColor={`${getValidBgColor(item.name)}`}
                      titleColor={`${getTitleColor(item.name, true).split(" ")[2]
                        } bg-clip-text text-transparent`}
                      align="center"
                    />
                  </div>
                  <div
                    className={`group-hover:bg-gradient-to-r ${getTitleColor(item.name, true).split("bg")[0]
                      } w-full h-full opacity-0 group-hover:opacity-100 duration-300 rounded-r-full`}
                  ></div>
                </div>
              </div>
              <h1 className="mb-0 ml-1 text-small text-ct-blue-45 leading-4">
                {item.achieved}%
              </h1>
            </div>
            <div
              className={`border-t-2 ml-2 border-blue-gray-A20 border-dashed ${graphWidth -
                Math.round(graphWidth * item.target) / maxTarget ===
                0
                ? "hidden"
                : "block"
                }`}
              style={{
                width:
                  graphWidth - Math.round(graphWidth * item.target) / maxTarget,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
