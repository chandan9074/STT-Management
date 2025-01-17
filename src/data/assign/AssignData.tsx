import { AUDIO_FILE_FAILED, AUDIO_FILE_UPLOADED } from "../../helpers/ConditionVariable"
import { targetFilterDT } from "../../types/assignTypes"

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

export const deviceData = [
    'Redmi Note 8 Pro',
    'Redmi Note 8',
    'Redmi Note 7 Pro',
    'Redmi Note 7 ',
    'Redmi Note 6'
]

export const uploadStatus = [
    AUDIO_FILE_UPLOADED,
    AUDIO_FILE_FAILED
]

export const predefined = [
    'As far as I am aware, this token is used for BOM lists',
    'What good is having tokens/containers for data and then NOT having them available for recall when and where you need them?',
    'As far as I am aware, this token is used for BOM lists',
    'explain what you are trying to do with this token, is this in a part or assembly drawing.',
    ' Then again, you get what you pay for I reckon.',
    'Also the status can be applied in the model to control identify the object model status also.'
]

export const weekBtnData = [
    { week: 1, name: 'Week 01' },
    { week: 2, name: 'Week 02' },
    { week: 3, name: 'Week 03' },
    { week: 4, name: 'Week 04' },
    { week: 5, name: 'Week 05' },
]

export const weekData = [
    'Week 01 (01-07',
    'Week 02 (08-14',
    'Week 03 (15-21',
    'Week 04 (22-28',
    'Week 05 (29-31',
]

export const februaryWeekData = [
    'Week 01 (01-07',
    'Week 02 (08-14',
    'Week 03 (15-21',
    'Week 04 (22-28',
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
        bulletBg: "bg-[#F54542]",
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

export const targetDataForRecreate = {
    id: "1",
    script: {
        "title": "বর্তমান ‘টিকা-বিভাজন’ প্রবণতা শুধু মহামারীটিকেই দীর্ঘস্থায়ী করবে। কোভিড-মুক্ত বিশ্বের জন্য, আমাদের অবশ্যই বিশ্বব্যাপী সকল মানুষের জন্য সার্বজনীন ও সাশ্রয়ী মূল্যে টিকার প্রাপ্যতা নিশ্চিত করতে হবে।",
        "description": "বর্তমান ‘টিকা-বিভাজন’ প্রবণতা শুধু মহামারীটিকেই দীর্ঘস্থায়ী করবে। কোভিড-মুক্ত বিশ্বের জন্য, আমাদের অবশ্যই বিশ্বব্যাপী সকল মানুষের জন্য সার্বজনীন ও সাশ্রয়ী মূল্যে টিকার প্রাপ্যতা নিশ্চিত করতে হবে।",
        "domain": "World & current affairs",
        "subDomain": "International Matter",
        "id": "c98ec4cb-bd39-4dcd-8e0d-2220337db349_8",
        "frequency": 0
    },
    target: {
        "id": "234875rfewrfew",
        "gender": "male",
        "ageRange": "25-30",
        "district": ["dhaka", "mymensingh"],
        "profession": "teacher",
        "economicSituation": "poor",
        "healthFactors": ["smoker", "jsghfkjwed"],
        "recordingArea": "baire",
        "recordingDistance": "baire",
        "education": "secondary",
        "target": 2345,
        "deadline": "25/01/2023",
        "reminder": ["kisr", "ki"],
        "remark": "nai kono remark"
    },
    assignee: {
        "id": "maksudalam@gmail.com",
        "name": "Maksud Alam",
        "role": "Admin",
        "roleID": "01738463449",
        "contact": "01738463449",
        "email": "maksudalam@gmail.com",
        "address": "Dhaka"
    }
}

export const targetFilter: targetFilterDT[] = [
    {
        type: "check",
        key: "targetStatus",
        viewKey: "targetStatus",
        title: "Target Status",
        // isParent: true,
        child: [
            "Not Assigned",
            "Partial Assigned",
            "All Assigned",
        ],
    },
    {
        type: "check",
        key: "speechStatus",
        viewKey: "speechStatus",
        title: "Speech Status",
        // isParent: true,
        child: [
            "Not Speech Uploaded",
            "Partial Uploaded",
            "100% Uploaded",
        ]
    }
]

export const assignSpeechData = {
    id: '2',
    otherInfo: {
        roleInfo: {
            id: "maksudalam@gmail.com",
            name: "Maksud Alam",
            role: "Manager",
            contact: "01738463449",
            email: "maksudalam@gmail.com",
            address: "Dhaka",
            gender: "Male"
        },
        deadLine: '21-12-2017',
        speeches: {
            total: 1000,
            uploaded: 450
        },
    },
    speechData:
        [
            {
                id: '1',
                speaker: [
                    {
                        name: 'Maksuda Alam',
                        gender: 'male',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam1@gmail.com"
                    },
                    {
                        name: 'Bilkis banu',
                        gender: 'female',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam2@gmail.com"
                    }
                ],
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                submissionDate: '30/01/2022; 3:14 PM',
                recordingArea: 'Inside Room',
                recordingDistance: '',
                device: 'Redmi Note 8',
                speech: {
                    id: '0',
                    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
                    duration: "5:00",
                    url:
                        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
                },
                role: "",
                // {
                //     id: '33',
                //     name: 'MD. Eman Hasan',
                //     role: 'Manager',
                //     email: 'miraz2710@gmail.com',
                //     contact: '01684610691',
                //     address: 'Dhaka',
                //     gender: 'Male'
                // },
                speeches: '355',
                maxSpeeches: '1000',
                remark: "",


            },
            {
                id: '2',
                speaker: [
                    {
                        name: 'Maksuda Alam',
                        gender: 'male',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam3@gmail.com"
                    },
                    {
                        name: 'Bilkis banu',
                        gender: 'female',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam4@gmail.com"
                    }
                ],
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                status: 'Rejected',
                recordingArea: '',
                recordingDistance: '',
                device: '',
                speech: {
                    id: '',
                    title: "",
                    duration: "",
                    url: ""
                },
                role: 'Team Leader',
                speeches: '800',
                maxSpeeches: '2000',
                remark: "This Is Remark data",

            },
            {
                id: '3',
                speaker: [],
                collector: {
                    name: '',
                    gender: '',
                    role: '',
                    contact: '',
                    address: '',
                    id: ""
                },
                recordingArea: '',
                device: '',
                recordingDistance: 'Close',
                speech: {
                    id: '0',
                    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
                    duration: "5:00",
                    url:
                        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
                },
                role: "",
                speeches: '100',
                maxSpeeches: '1000',
                remark: "This Is Remark data",


            },

            {
                id: '4',
                speaker: [
                    {
                        name: 'Maksuda Alam',
                        gender: 'male',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        id: "maksudalam5@gmail.com",
                        email: "maksudalam1@gmail.com",
                    }
                ],
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                status: 'Annotated',
                recordingArea: 'Inside Room',
                recordingDistance: 'Close',
                device: 'Redmi Note 8',
                role: "",
                speech: {
                    id: '',
                    title: "",
                    duration: "",
                    url: ""
                },
                speeches: '800',
                maxSpeeches: '3000',
                remark: "This Is Remark data",


            },
            {
                id: '5',
                speaker: [
                    {
                        name: 'Maksuda Alam',
                        gender: 'male',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam6@gmail.com"
                    },
                    {
                        name: 'Bilkis banu',
                        gender: 'female',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam7@gmail.com"
                    }
                ],
                collector: {
                    name: '',
                    gender: '',
                    role: '',
                    contact: '',
                    address: '',
                    id: ""
                },
                submissionDate: '30/01/2022; 3:14 PM',
                recordingArea: 'Inside Room',
                recordingDistance: 'Close',
                device: 'Redmi Note 8',
                role: "",
                speech: {
                    id: '',
                    title: "",
                    duration: "",
                    url: ""
                },
                speeches: '800',
                maxSpeeches: '3000',
                remark: "",


            },

            {
                id: '6',
                speaker: [],
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                recordingArea: 'Inside Room',
                recordingDistance: 'Close',
                device: 'Redmi Note 8',
                role: "",
                speech: {
                    id: '',
                    title: "",
                    duration: "",
                    url: ""
                },
                speeches: '800',
                maxSpeeches: '3000',
                remark: "",


            },
            {
                id: '7',
                speaker: [
                    {
                        name: 'Maksuda Alam',
                        gender: 'male',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam8@gmail.com"
                    },
                    {
                        name: 'Bilkis banu',
                        gender: 'female',
                        role: 'speaker',
                        contact: '019',
                        address: 'Dhaka',
                        email: "maksudalam1@gmail.com",
                        id: "maksudalam9@gmail.com"
                    }
                ],
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                recordingArea: 'Inside Room',
                recordingDistance: 'Close',
                device: 'Redmi Note 8',
                role: "",
                speech: {
                    id: '',
                    title: "",
                    duration: "",
                    url: ""
                },
                speeches: '800',
                maxSpeeches: '3000',
                remark: "",

            }
        ]
}


export const sortStatus = [
    'Sort by Latest Deadline',
    'Sort by Oldest Deadline'
]

export type remark = {
    roleName: 'Mohammad amir khan',
    role: 'Admin'
    date: '07/02/2022, 5:34 PM',
    desc: 'This is remark'
}


export const targetSpeechData = {
    id: '2',
    otherInfo: {
        roleInfo: {
            id: "maksudalam@gmail.com",
            name: "Maksud Alam",
            role: "Manager",
            contact: "01738463449",
            email: "maksudalam@gmail.com",
            address: "Dhaka",
            gender: "Male"
        },
        targetSpeech: 1000,
        receivedSpeech: 890,
        receivedHour: 1200,
        lastUpdate: "22 Aug 2022",
        audioStatus: {
            valid: 700,
            invalid: 500,
        }
    },
    speechData:
        [
            {
                id: '1',
                "speaker": {
                    "locality": "North-East Bangla",
                    "speakers": [
                        {
                            "id": "bilkis@gmail.com",
                            "name": 'Bilkis banu',
                            "role": 'speaker',
                            "gender": 'female',
                            "childhoodArea": "Nator",
                            "age": "27",
                            "profession": "teacher",
                            "economicSituation": "poor",
                            "education": "secondary",
                            "smokingHabit": "Prefer not say",
                            "hearingDisability": "no",
                            "shutter": "yes",
                            "recordingArea": "Inside Room",
                            "recordingDistance": "Close",
                            "note": "Dark Ux is"
                        },
                        {
                            "id": "maksud@gmail.com",
                            "name": 'maksud alam',
                            "role": 'speaker',
                            "gender": 'male',
                            "childhoodArea": "barishal",
                            "age": "55",
                            "profession": "Doctor",
                            "economicSituation": "rich",
                            "education": "higher secondary",
                            "smokingHabit": "yes",
                            "hearingDisability": "no",
                            "shutter": "yes",
                            "recordingArea": "Inside Room",
                            "recordingDistance": "Close",
                            "note": "Dark Ux is ---"
                        },
                        {
                            "id": "rakib@gmail.com",
                            "name": 'rakib alam',
                            "role": 'speaker',
                            "gender": 'male',
                            "childhoodArea": "rangpur",
                            "age": "55",
                            "profession": "Doctor",
                            "economicSituation": "rich",
                            "education": "higher secondary",
                            "smokingHabit": "yes",
                            "hearingDisability": "no",
                            "shutter": "yes",
                            "recordingArea": "Inside Room",
                            "recordingDistance": "Close",
                            "note": "Dark Ux is ---"
                        },
                    ],

                },
                "script": {
                    "module": "STT",
                    "distributionSource": "Lecture",
                    "isAge": false,
                    "domain": "Applied science",
                    "subdomain": "Technology",
                    "sourceType": "",
                    "sourceUrl": "",
                    "sourceFile": "",
                    "sourceFileName": "",
                    "sourceFileImage": "",
                    "title": "",
                    "description": "মহেশপুর থানার ওসি সাইফুল ইসলাম বলেন, খবর পেয়ে পুলিশ ঘটনাস্থলে পৌঁছে মরদেহটি উদ্ধার করে থানায় নিয়ে আসে। পঁয়ত্রিশ - চল্লিশ বছর বয়সী এই নারীর পরনে সালোয়ার কামিজ রয়েছে।",
                    "date": "2023-02-16T12:45:58.536350",
                    "frequency": 0,
                    "id": "a9750dad-0e9b-4d23-9585-c7ff249616e9_20"
                },
                "others": {
                    "device": 'Redmi-Note 7 pro',
                    "journey": {
                        "role": [
                            {
                                "id": "1",
                                "role": 'Admin',
                                "name": 'Md. Jalal Uddin',
                                "date": "01 Jan’ 22"
                            },
                            {
                                "id": "2",
                                "role": 'Manager',
                                "name": 'Md. Eman Hassan',
                                "date": "03 Jan’ 22"
                            },
                            {
                                "id": "3",
                                "role": 'Team Leader',
                                "name": 'Jahida Ferdous Mim',
                                "date": "05 Jan’ 22"
                            },
                            {
                                "id": "4",
                                "role": 'Collector',
                                "name": 'Muhammad Miraz Mahmud',
                                "date": "05 Jan’ 22"
                            },
                        ],
                        "speakers":
                        {
                            "locality": 'Middle-East Bangal',
                            "roleTitle": 'speaker',
                            "role": [
                                {
                                    "id": "22",
                                    "name": 'Raihan Mozumdar',
                                    "gender": "male"
                                },
                                {
                                    "id": "223",
                                    "name": 'Bilkis Khatun',
                                    "gender": "female"
                                }
                            ]
                        },

                    }
                },
                collector: {
                    name: 'Muhammad Miraz',
                    gender: 'male',
                    role: 'collector',
                    contact: '019',
                    address: 'Rajbongshi',
                    id: "maksudalam1@gmail.com"
                },
                status: 'Approved',
                submissionDate: '30/01/2022; 3:14 PM',
                device: 'Redmi Note 8',
                speech: {
                    id: '0',
                    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
                    duration: "5:00",
                    url:
                        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
                },
                role: "",
                "remark": [
                    {
                        "roleInfo": {
                            "id": "maksudalam@gmail.com",
                            "name": "Maksud Alam",
                            "role": "Manager",
                            "gender": "Male",
                        },
                        "deadline": "05/02/2022, 5:41 AM",
                        "des": "Dark UX is when designers create an experience that pushes users in a direction that benefits the interests of the company",
                    },
                    {
                        "roleInfo": {
                            "id": "maksudalam@gmail.com",
                            "name": "Maksud Alam",
                            "role": "Manager",
                            "gender": "Male",
                        },
                        "deadline": "05/02/2022, 5:41 AM",
                        "des": "Dark UX is when designers create an experience that pushes users in a direction that benefits the interests of the company",
                    },

                ],


            },
        ]
}


