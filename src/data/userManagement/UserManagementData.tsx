export const RoleData = [
    'Admin',
    'Manager',
    'Collector',
    'Team Leader',
    'Annotator',
    'Audio Checker',
    'Validator',
    'Speaker'
]

export const homeDistrict = [
    {
        division: 'BARISAL',
        district: [
            'Barguna',
            'Barisal',
            'Bhola',
            'jhalokati',
            'Patuakhali'
        ]
    },
    {
        division: 'CHATTROGRAM',
        district: [
            'Bandarban',
            'Brahmanbaria',
            'Chandpur'
        ]
    },

]


export const lastDegreeAchived = [
    'Honors',
    'Masters'
]


export const userRoleDropdownData = [
    'Admin',
    'Manager',
    'Team Leader',
    'Collector',
    'Audio Checker',
    'Annotator',
    'Validator',
    'Speaker-Male',
    "Speaker-Female"
]

export const reportingRoleData = [
    'Admin',
    'Manager',
    'Team Leader',
    'Audio Checker',
    'Annotator',
    'Validator'
]

export const adminData = [
    {
        id: 1,
        name: 'Mohammad Miraz',
        number: '01884654585'
    },
    {
        id: 2,
        name: 'Maksud Alam',
        number: '018684610691'
    },
    {
        id: 3,
        name: 'Rohim',
        number: '01884654585'
    },
    {
        id: 4,
        name: 'Jahir Uddin',
        number: '018684660691'
    },
    {
        id: 5,
        name: 'Sammi',
        number: '011684610691'
    },
    {
        id: 6,
        name: 'Savannah Nguyen',
        number: '018687910691'
    }
]

export const gender = [
    'Male',
    'Female'
]

export const education = [
    'Uneducated',
    'Secondary',
    'Higher Secondary',
    'Graduate & Postgraduate'
]

export const educationSituation = [
    'Lower Class',
    'Middle Class',
    'Upper Class            '
]

export const ageRange = [
    '7-14',
    '15-24',
    '25-34',
    '35-44',
    '45-59',
    '60-65'
]

export const yesNoPreferData = [
    'Yes',
    'No',
    'Prefer not to say'
]

export const profession = [
    'Self Employed',
    'Job Holder',
    'Student',
    'Unemployed'
]

export const userManagementTable = [
    {
        id: "9a-sdkf-asdfj-2348",
        name: "Mohammad Miraz",
        role: ["Team Leader", "Collector"],
        primaryRole: "Team Leader",
        email: "tienlapspktnd@gmail.com",
        userId: "tienlapspktnd@gmail.com",
        password: "123456",
        mobileNumber: "01884654585",
        presentDistrict: "Dhaka",
        homeDistrict: "Chandpur",
        education: "Honors 1st in Political Science",
        status: "Active",
        reportingTo: {
            name: "Mohammad Miraz",
            role: "Admin"
        },
        reportingChannel: [
            {
                name: "Mohammad Miraz",
                role: "Admin"
            },
            {
                name: "Mohammad Miraz",
                role: "Manager"
            },
            {
                name: "Mohammad Miraz",
                role: "Team Leader"
            },
            {
                name: "Mohammad Miraz",
                role: "Collector"
            },
        ]
    },
    {
        id: "9a-sdkf-asdfj-2338",
        name: "Mohammad Miraz",
        role: ["Team Leader", "Collector"],
        primaryRole: "Collector",
        email: "tienlapspktnd@gmail.com",
        userId: "tienlapspktnd@gmail.com",
        password: "123456",
        mobileNumber: "01884654585",
        presentDistrict: "Dhaka",
        homeDistrict: "Chandpur",
        education: "Honors 1st in Political Science",
        status: "Active",
        reportingTo: {
            name: "Mohammad Miraz",
            role: "Admin"
        },
        reportingChannel: [
            {
                name: "Mohammad Miraz",
                role: "Admin"
            },
            {
                name: "Mohammad Miraz",
                role: "Manager"
            },
            {
                name: "Mohammad Miraz",
                role: "Team Leader"
            },
            {
                name: "Mohammad Miraz",
                role: "Collector"
            },
        ]
    }
]

export const targetAllSpeechData =
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
            collector: {
                name: 'Muhammad Miraz',
                gender: 'male',
                role: 'collector',
                contact: '019',
                address: 'Rajbongshi',
                id: "maksudalam1@gmail.com"
            },
            speech: {
                id: '0',
                title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
                duration: "5:00",
                url:
                    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
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
                    "audioChecker": {
                        "id": "55",
                        "locality": "North-East  Bangla",
                        "name": "Zakir Hossain",
                        "role": 'Audio Checker',
                        "pickedDate": "23 Jan’23; 3:30 PM"
                    }
                }
            },
            "deadLine": "01/02/2022",
            submissionDate: '30/01/2022; 3:14 PM',
        },
        {
            id: '22',
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
                ],

            },
            collector: {
                name: 'Muhammad Miraz',
                gender: 'male',
                role: 'collector',
                contact: '019',
                address: 'Rajbongshi',
                id: "maksudalam1@gmail.com"
            },
            speech: {
                id: '0',
                title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
                duration: "5:00",
                url:
                    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
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
                    "audioChecker": {
                        "id": "55",
                        "locality": "North-East  Bangla",
                        "name": "Zakir Hossain",
                        "role": 'Audio Checker',
                        "pickedDate": "23 Jan’23; 3:30 PM"
                    }
                }
            },
            "deadLine": "01/02/2022",
            submissionDate: '30/01/2022; 3:14 PM',
        },
    ]

export const targetCompletedData =
    [
        {
            "id": "01b9423b-b00e-4291-b195-02005949apiu80",
            "target": {
                "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
                "gender": "male",
                "ageRange": "34-50",
                "district": [
                    "dhaka",
                    "mymensingh"
                ],
                "profession": "teacher",
                "economicSituation": "poor",
                "healthFactors": [
                    "smoker",
                    "jsghfkjwed"
                ],
                "recordingArea": "baire",
                "recordingDistance": "baire",
                "education": "secondary",
                "target": 2345,
                "deadline": "25/01/2023",
                "reminder": [
                    "kisr",
                    "ki"
                ],
                "remark": "nai kono remark"
            },
            "assignee": {
                "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
                "name": "Mohammad amir khan",
                "role": "Admin",
                "roleID": "01915645322",
                "contact": "01915645322",
                "email": "amirkhan23@gmail.com",
                "address": "Dhaka"
            },
            "status": 75,
            "speeches": {
                "total": 1000,
                "uploaded": 350
            },
            "assignedDate": "30/01/2022",
            "submissionDate": "25/01/2023",
        },
        {
            "id": "01b9423b-b00e-4291-b195-02005949a280",
            "target": {
                "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
                "gender": "male",
                "ageRange": "34-50",
                "district": [
                    "dhaka",
                    "mymensingh"
                ],
                "profession": "teacher",
                "economicSituation": "poor",
                "healthFactors": [
                    "smoker",
                    "jsghfkjwed"
                ],
                "recordingArea": "baire",
                "recordingDistance": "baire",
                "education": "secondary",
                "target": 2345,
                "deadline": "25/01/2023",
                "reminder": [
                    "kisr",
                    "ki"
                ],
                "remark": "nai kono remark"
            },
            "assignee": {
                "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
                "name": "Mohammad amir khan",
                "role": "Admin",
                "roleID": "01915645322",
                "contact": "01915645322",
                "email": "amirkhan23@gmail.com",
                "address": "Dhaka"
            },
            "status": 75,
            "speeches": {
                "total": 1000,
                "uploaded": 350
            },
            "assignedDate": "30/01/2022",
            "submissionDate": "25/01/2020",
        }
    ]

export const targetData = [
    {
        "id": "01b9423b-b00e-4291-b195-02005949a280",
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
        "target": {
            "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
            "gender": "male",
            "ageRange": "34-50",
            "district": [
                "dhaka",
                "mymensingh"
            ],
            "profession": "teacher",
            "economicSituation": "poor",
            "healthFactors": [
                "smoker",
                "jsghfkjwed"
            ],
            "recordingArea": "baire",
            "recordingDistance": "baire",
            "education": "secondary",
            "target": 2345,
            "deadline": "30/01/2022",
            "reminder": [
                "kisr",
                "ki"
            ],
            "remark": "nai kono remark"
        },
        "assignee": {
            "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
            "name": "Mohammad amir khan",
            "role": "Admin",
            "roleID": "01915645322",
            "contact": "01915645322",
            "email": "amirkhan23@gmail.com",
            "address": "Dhaka"
        },
        "status": 75,
        "speeches": {
            "total": 1000,
            "uploaded": 350
        },
        "assignedDate": "30/01/2022"
    },
    {
        "id": "11b9423b-b00e-4291-b195-02005949a280",
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
        "target": {
            "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
            "gender": "male",
            "ageRange": "34-50",
            "district": [
                "dhaka",
                "mymensingh"
            ],
            "profession": "teacher",
            "economicSituation": "poor",
            "healthFactors": [
                "smoker",
                "jsghfkjwed"
            ],
            "recordingArea": "baire",
            "recordingDistance": "baire",
            "education": "secondary",
            "target": 2345,
            "deadline": "30/01/2022",
            "reminder": [
                "kisr",
                "ki"
            ],
            "remark": "nai kono remark"
        },
        "assignee": {
            "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
            "name": "Mohammad amir khan",
            "role": "Speaker",
            "roleID": "01915645322",
            "contact": "01915645322",
            "email": "amirkhan23@gmail.com",
            "address": "Dhaka"
        },
        "status": 75,
        "speeches": {
            "total": 1000,
            "uploaded": 350
        },
        "assignedDate": "30/01/2022"
    },
    {
        "id": "02b9423b-b00e-4291-b195-02005949a280",
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
        "target": {
            "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
            "gender": "male",
            "ageRange": "34-50",
            "district": [
                "dhaka",
                "mymensingh"
            ],
            "profession": "teacher",
            "economicSituation": "poor",
            "healthFactors": [
                "smoker",
                "jsghfkjwed"
            ],
            "recordingArea": "baire",
            "recordingDistance": "baire",
            "education": "secondary",
            "target": 2345,
            "deadline": "30/01/2022",
            "reminder": [
                "kisr",
                "ki"
            ],
            "remark": "nai kono remark"
        },
        "assignee": {
            "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
            "name": "Mohammad amir khan",
            "role": "Manager",
            "roleID": "01915645322",
            "contact": "01915645322",
            "email": "amirkhan23@gmail.com",
            "address": "Dhaka"
        },
        "status": 75,
        "speeches": {
            "total": 1000,
            "uploaded": 350
        },
        "assignedDate": "30/01/2022"
    },
    {
        "id": "0139423b-b00e-4291-b195-02005949a280",
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
        "target": {
            "id": "0c302aff-68df-4a18-bd1d-ddbe81ca5026",
            "gender": "male",
            "ageRange": "34-50",
            "district": [
                "dhaka",
                "mymensingh"
            ],
            "profession": "teacher",
            "economicSituation": "poor",
            "healthFactors": [
                "smoker",
                "jsghfkjwed"
            ],
            "recordingArea": "baire",
            "recordingDistance": "baire",
            "education": "secondary",
            "target": 2345,
            "deadline": "30/01/2022",
            "reminder": [
                "kisr",
                "ki"
            ],
            "remark": "nai kono remark"
        },
        "assignee": {
            "id": "2ce4e033-59f4-4381-94c0-2f435dd3bfb4",
            "name": "Mohammad amir khan",
            "role": "Manager",
            "roleID": "01915645322",
            "contact": "01915645322",
            "email": "amirkhan23@gmail.com",
            "address": "Dhaka"
        },
        "status": 75,
        "speeches": {
            "total": 1000,
            "uploaded": 350
        },
        "assignedDate": "30/01/2022"
    },

]