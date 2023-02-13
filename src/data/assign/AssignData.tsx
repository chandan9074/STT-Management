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

export const assignStatisticsData = {
    target: 6000,
    received: 1200,
    audios: 330,
    audioStatus: [
        {
            name: "Valid",
            hour: 720
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