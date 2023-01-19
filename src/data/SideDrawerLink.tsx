import * as PATH from "../helpers/Slug";

let SideDrawerLink = [
    {
        name: 'Audio Management',
        // route: '/audio-management',
        route: PATH.TEST,
        // route: PATH.COLLECTING_AUDIO,
        icon: '',
        links: [
            {
                name: 'Collecting Audio',
                route: PATH.COLLECTING_AUDIO,
                links: [
                    {
                        name: 'Checking',
                        route: PATH.CHECKING,
                        links: [
                            {
                                name: 'Checking Status',
                                route: PATH.CHECKING_STATUS,
                                links:[]
                            },
                            {
                                name: 'All Checked Audios',
                                route: PATH.ALL_CHECKED_AUDIOS,
                                links:[]
                            }
                        ]
                    },
                    {
                        name: 'Annotation',
                        route: '/annotation',
                        links: [
                            {
                                name: 'Sentence Level',
                                route: '/sentence-level',
                                links:[]
                            },
                            {
                                name: 'worde-level',
                                route: '/word-level',
                                links:[]
                            },
                            {
                                name: 'Phoneme Level',
                                route: '/phoneme-level',
                                links:[]
                            },
                            {
                                name: 'Annotated Files',
                                route: '/Anntated-files',
                                links:[]
                            },
                        ]
                    },
                    {
                        name: 'Validation',
                        route: '/validation',
                        links:[]
                    }
                ]
            },
            {
                name: 'Upload Audio/Video',
                route: PATH.UPLOAD_AUDION_VIDEO_PATH,
                links: []
            }
        ]
    },
    // {
    //     name: 'Script',
    //     route: PATH.SCRIPT,
    //     icon: '',
    //     link: []
    // }
]
export default SideDrawerLink;