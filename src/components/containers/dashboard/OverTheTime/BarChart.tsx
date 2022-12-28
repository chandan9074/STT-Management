import { overTheTimeGData } from "../../../../data/dashboard/overTheTimeGData";
import Tooltip from "./Tooltip";

const BarChart = () => {
  const barHeight = 200;
  return (
    <div className="flex justify-between mt-4">
      {overTheTimeGData.dayData.map((item, index) => (
        <div className="flex flex-col items-center justify-end">
          {item.receivedHour > 0 ? (
            <div
              className={`h-[${barHeight}px] w-9 relative flex ${
                index < 4
                  ? "justify-start"
                  : overTheTimeGData.dayData.length - 6 < index
                  ? "justify-end"
                  : "justify-center"
              } group`}
            >
              {item.hourData.length > 0 && (
                <>
                  <Tooltip
                    barHeight={barHeight}
                    item={item}
                    overTheTimeGData={overTheTimeGData}
                    index={index}
                  />
                  <div
                    className={`absolute bottom-0 w-9 bg-gradient-to-t from-orange-A10 to-orange-10`}
                    style={{
                      height: item.hourData[0].hour
                        ? `${Math.round(
                            Math.round(barHeight * item.hourData[0]?.hour) /
                              overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                    }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-orange-A10" />
                  </div>
                  <div
                    className={`absolute w-9 bg-gradient-to-b from-winter-wizard via-green-A10 to-orange-10`}
                    style={{
                      height: item.hourData[1].hour
                        ? `${Math.round(
                            Math.round(barHeight * item.hourData[1]?.hour) /
                              overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                      bottom: item.hourData[0].hour
                        ? `${Math.round(
                            Math.round(barHeight * item.hourData[0]?.hour) /
                              overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                    }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-green-A10" />
                  </div>
                  <div
                    className={`absolute w-9 bg-gradient-to-b from-ct-blue-medium to-winter-wizard`}
                    style={{
                      height: item.hourData[2].hour
                        ? `${Math.round(
                            Math.round(barHeight * item.hourData[2]?.hour) /
                              overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                      bottom:
                        item.hourData[1].hour && item.hourData[0].hour
                          ? `${
                              Math.round(
                                Math.round(barHeight * item.hourData[1]?.hour) /
                                  overTheTimeGData.maxReceivedHour
                              ) +
                              Math.round(
                                Math.round(barHeight * item.hourData[0]?.hour) /
                                  overTheTimeGData.maxReceivedHour
                              )
                            }px`
                          : "",
                    }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-winter-wizard" />
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="h-1.5 w-0.5 bg-blue-gray-A30" />
          )}
          <h4 className="mt-3 mb-0 text-xxs text-ct-blue-45">{item.day}</h4>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
