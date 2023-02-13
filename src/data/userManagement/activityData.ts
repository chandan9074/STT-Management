export const activityData = {
    name: "Jacob Jones",
    email: "tienlapspktnd@gmail.com",
    phone: "01684610691",
    address: "Dhaka",
    PrimaryRole: "Admin",
    roleList:["Admin", "Manager", "Team Leader"],
    roleData: [
        {
            name: "Admin",
            target: 6000,
            received: 1200,
            audios: 330,
            audioStatus: [
                {
                    name: "Valid",
                    hour:720
                },
                {
                    name: "Validator",
                    hour: 20
                },
                {
                    name: "Annotator",
                    hour: 40
                },
                {
                    name: "Checker",
                    hour: 420
                }

            ],
            localityData: [
                {
                  id: "1",
                  name: "Middle East Bangla",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "2",
                  name: "South Bangla",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "3",
                  name: "Barendri",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "4",
                  name: "Rajbongshi",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "4",
                  name: "Kamrupi",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "5",
                  name: "North-East Bangla",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "6",
                  name: "South-West Bangla",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
                {
                  id: "7",
                  name: "Tribal",
                  collected: 60,
                  duration: 50,
                  speaker: 10,
                  lastUpdate: "22 Aug 2022",
                },
              ],
              overTheTimeData:{
                id: "1",
                year: 2023,
                month:"February",
                weekData:[
                    {
                        id: "1",
                        week: 1,
                        maxTarget: 1000,
                        dayData:[
                          {
                            day: "01",
                            target: 800,
                            uploaded:800,
                            pending:0,
                            deadline:"22 Aug 2022",
                            status: "uploaded"
                          },
                          {
                            day: "02",
                            target: 0,
                            uploaded:0,
                            pending:0,
                            deadline:"",
                            status: ""
                          },
                          {
                            day: "03",
                            target: 700,
                            uploaded:400,
                            pending:200,
                            deadline:"22 Aug 2022",
                            status: "pending"
                          },
                          {
                            day: "04",
                            target: 1000,
                            uploaded:400,
                            pending:600,
                            deadline:"22 Aug 2022",
                            status: "pending"
                          },
                          {
                            day: "05",
                            target: 900,
                            uploaded:500,
                            pending:300,
                            deadline:"22 Aug 2022",
                            status: "close"
                          },
                          {
                            day: "06",
                            target: 500,
                            uploaded:300,
                            pending:100,
                            deadline:"22 Aug 2022",
                            status: "crossed"
                          },
                          {
                            day: "07",
                            target: 750,
                            uploaded:0,
                            pending:0,
                            deadline:"22 Aug 2022",
                            status: "crossed"
                          }
                        ]
                    }
                ]
              }
        }
    ]
}

export const tooltipData = [
  {
      name: "Valid",
      title: "Valid by Validator",
      titleColor: "text-[#00B86E]",
      barBgHover: "hover:bg-[#00944D]",
      bulletBg: "bg-[#00B86E]",
  },
  {
      name: "Validator",
      title: "Rejected by Validator",
      titleColor: "text-[#FF8470]",
      barBgHover: "hover:bg-[#CB3827]",
      bulletBg: "bg-[#A10008]",
  },
  {
      name: "Annotator",
      title: "Rejected by Annotator",
      titleColor: "text-[#FF8987]",
      barBgHover: "hover:bg-[#D11C29]",
      bulletBg: "bg-secondary-red-50",
  },
  {
      name: "Checker",
      title: "Rejected by Checker",
      titleColor: "text-[#F5AC42]",
      barBgHover: "hover:bg-[#C78415]",
      bulletBg: "bg-[#F5AC42]",
  }
]

export const labelData = [
  {
      name: "Valid",
      label: "Valid",
      bulletBg: "bg-[#00B86E]",
  },
  {
      name: "Validator",
      label: "Rejected by Validator",
      bulletBg: "bg-[#A10008]",
  },
  {
      name: "Annotator",
      label: "Rejected by Annotator",
      bulletBg: "bg-secondary-red-50",
  },
  {
      name: "Checker",
      label: "Rejected by Checker",
      bulletBg: "bg-[#F5AC42]",
  }
]