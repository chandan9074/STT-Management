export const healthFactors = [
    'Hearing',
    'Smoker',
    'Stutter'
]

export const recordingArea = [
    'Inside Room',
    'Outside Room',
    'Road',
    'Market',
    'Open Area',
    'Other Public Area',
    'Noisy'
]
export const recordingDistanceAssign = [
    'Close',
    'So Close',
    'Far',
    'So Far',
    'Moving',
    'Round',
    'Walking'
]

export const weekBtnData = [
    { week: 1, name: 'Week 01' },
    { week: 2, name: 'Week 02' },
    { week: 3, name: 'Week 03' },
    { week: 4, name: 'Week 04' },
    { week: 5, name: 'Week 05' },
]

export const weekData = [
    'Week 01(01-07',
    'Week 02(08-14',
    'Week 03(15-21',
    'Week 04(22-28',
    'Week 05(29-31',
]

export const scriptColorData = [
    {
        id: "text-secondary-purple-50",
        idBg: "bg-purple-10",
        rowBg: "bg-purple-A10",
    },
    {
        id: "text-secondary-blue-50",
        idBg: "bg-blue-10",
        rowBg: "bg-blue-20",
    },
    {
        id: "text-secondary-green-50",
        idBg: "bg-green-10",
        rowBg: "bg-green-A10",
    },
    {
        id: "text-red-60",
        idBg: "bg-red-03",
        rowBg: "bg-red-10",
    },
    {
        id: "text-secondary-orange-50",
        idBg: "bg-orange-A10",
        rowBg: "bg-orange-10",
    },
    {
        id: "text-orange-60",
        idBg: "bg-orange-10",
        rowBg: "bg-yellow-A10",
    },
    {
        id: "text-ct-blue-80",
        idBg: "bg-blue-gray-05",
        rowBg: "bg-ct-blue-10",
    },
]

export const tooltipData = [
    {
        name: "Valid",
        title: "Valid",
        titleColor: "text-[#00B86E]",
        barBgHover: "hover:bg-[#00944D]",
        bulletBg: "bg-[#00B86E]",
    },
    {
        name: "Rejected",
        title: "Rejected",
        titleColor: "text-[#FF8470]",
        barBgHover: "hover:bg-[#CB3827]",
        bulletBg: "bg-[#A10008]",
    }
]

export const labelData = [
    {
        name: "Valid",
        label: "Valid",
        bulletBg: "bg-[#00B86E]",
    },
    {
        name: "Rejected",
        label: "Rejected",
        bulletBg: "bg-[#A10008]",
    }
]

export const assignStatisticsData = {
    target: 6000,
    received: 1200,
    audios: 330,
    audioStatus: [
        {
            name: "Valid",
            hour: 700
        },
        {
            name: "Rejected",
            hour: 500
        },

    ],
    overTheTimeData: {
        id: "1",
        year: 2023,
        month: "February",
        weekData: [
            {
                id: "1",
                week: 1,
                maxTarget: 1000,
                dayData: [
                    {
                        day: "01",
                        target: 800,
                        uploaded: 800,
                        pending: 0,
                        deadline: "22 Aug 2022",
                        status: "uploaded"
                    },
                    {
                        day: "02",
                        target: 0,
                        uploaded: 0,
                        pending: 0,
                        deadline: "",
                        status: ""
                    },
                    {
                        day: "03",
                        target: 700,
                        uploaded: 400,
                        pending: 200,
                        deadline: "22 Aug 2022",
                        status: "pending"
                    },
                    {
                        day: "04",
                        target: 1000,
                        uploaded: 400,
                        pending: 600,
                        deadline: "22 Aug 2022",
                        status: "pending"
                    },
                    {
                        day: "05",
                        target: 900,
                        uploaded: 500,
                        pending: 300,
                        deadline: "22 Aug 2022",
                        status: "close"
                    },
                    {
                        day: "06",
                        target: 500,
                        uploaded: 300,
                        pending: 100,
                        deadline: "22 Aug 2022",
                        status: "crossed"
                    },
                    {
                        day: "07",
                        target: 750,
                        uploaded: 0,
                        pending: 0,
                        deadline: "22 Aug 2022",
                        status: "crossed"
                    }
                ]
            }
        ]
    }
}