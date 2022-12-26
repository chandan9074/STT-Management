import { overTheTimeGData } from "../../../../data/dashboard/overTheTimeGData";

const BarChart = () => {
  const barHeight = 200;
  return (
    <div className="flex justify-between mt-4">
      {overTheTimeGData.dayData.map((item, index) => (
        <div className="flex flex-col items-center justify-end">
          {item.receivedHour > 0 ? (
            <div
              className={`h-[${barHeight}px] w-9 relative flex justify-center`}
            >
              {item.hourData.length > 0 && (
                <>
                  <div
                    className="absolute w-10 h-20 bg-black"
                    style={{
                      bottom:
                        item.hourData[0].validHour &&
                        item.hourData[1].inValidHour &&
                        item.hourData[2].notCheckedHour
                          ? Math.round(
                              Math.round(
                                barHeight * item.hourData[0]?.validHour
                              ) / overTheTimeGData.maxReceivedHour
                            ) +
                            Math.round(
                              Math.round(
                                barHeight * item.hourData[1]?.inValidHour
                              ) / overTheTimeGData.maxReceivedHour
                            ) +
                            Math.round(
                              Math.round(
                                barHeight * item.hourData[2]?.notCheckedHour
                              ) / overTheTimeGData.maxReceivedHour
                            )
                          : 0,
                    }}
                  ></div>
                  <div
                    className={`absolute bottom-0 w-9 bg-winter-wizard $`}
                    style={{
                      height: item.hourData[0].validHour
                        ? `${Math.round(
                            Math.round(
                              barHeight * item.hourData[0]?.validHour
                            ) / overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                    }}
                  ></div>
                  <div
                    className={`absolute w-9 bg-green-A10 $`}
                    style={{
                      height: item.hourData[1].inValidHour
                        ? `${Math.round(
                            Math.round(
                              barHeight * item.hourData[1]?.inValidHour
                            ) / overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                      bottom: item.hourData[0].validHour
                        ? `${Math.round(
                            Math.round(
                              barHeight * item.hourData[0]?.validHour
                            ) / overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                    }}
                  ></div>
                  <div
                    className={`absolute w-9 bg-orange-A10 $`}
                    style={{
                      height: item.hourData[2].notCheckedHour
                        ? `${Math.round(
                            Math.round(
                              barHeight * item.hourData[2]?.notCheckedHour
                            ) / overTheTimeGData.maxReceivedHour
                          )}px`
                        : "",
                      bottom:
                        item.hourData[1].inValidHour &&
                        item.hourData[0].validHour
                          ? `${
                              Math.round(
                                Math.round(
                                  barHeight * item.hourData[1]?.inValidHour
                                ) / overTheTimeGData.maxReceivedHour
                              ) +
                              Math.round(
                                Math.round(
                                  barHeight * item.hourData[0]?.validHour
                                ) / overTheTimeGData.maxReceivedHour
                              )
                            }px`
                          : "",
                    }}
                  ></div>
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

// item.hourData[0].validHour &&
//                         item.hourData[1].inValidHour &&
//                         item.hourData[2].notCheckedHour
//                           ? `${
//                               item.hourData[0].validHour +
//                               item.hourData[1].inValidHour +
//                               item.hourData[2].notCheckedHour
//                             }px`
//                           : ""
