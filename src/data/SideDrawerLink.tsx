import * as PATH from "../helpers/Slug";

let SideDrawerLink = [
    {
        name: 'Assign',
        // route: '/audio-management',
        route: PATH.ASSIGN_PATH,
        // route: PATH.COLLECTING_AUDIO,
        icon: '',
        links: [
            {
                name: 'All Target',
                route: PATH.ALL_TARGET_PTAH,
                links: []
            },
            {
                name: 'Draft',
                route: PATH.UPLOAD_AUDION_VIDEO_PATH,
                links: []
            }
        ]
    },

    {
        name: 'Audio Management',
        // route: '/audio-management',
        route: PATH.AUDIO_PATH,
        // route: PATH.COLLECTING_AUDIO,
        icon: '',
        links: [
            {
                name: 'Collected Audio',
                route: PATH.COLLECTING_AUDIO,
                links: [
                    {
                        name: 'Checking',
                        route: PATH.CHECKING,
                        links: [
                            {
                                name: 'Checking Status',
                                route: PATH.CHECKING_STATUS,
                                links: []
                            },
                            {
                                name: 'All Checked Audios',
                                route: PATH.ALL_CHECKED_AUDIOS,
                                links: []
                            }
                        ]
                    },
                    {
                        name: 'Annotation',
                        route: PATH.ANNOTAION,
                        links: [
                            {
                                name: 'Sentence Level',
                                route: PATH.SENETENCE_LEVEL,
                                links: []
                            },
                            {
                                name: 'Word Level',
                                route: PATH.WORD_LEVEL,
                                links: []
                            },
                            {
                                name: 'Phoneme Level',
                                route: PATH.PHONEME_LEVEL,
                                links: []
                            },
                            {
                                name: 'Annotated Files',
                                route: PATH.ANNOTATED_FILES,
                                links: []
                            },
                        ]
                    },
                    {
                        name: 'Validation',
                        route: PATH.VALIDATION,
                        links: [
                            {
                                name: 'Sentence Level',
                                route: PATH.SENETENCE_LEVEL,
                                links: []
                            },
                            {
                                name: 'Word Level',
                                route: PATH.WORD_LEVEL,
                                links: []
                            },
                            {
                                name: 'Phoneme Level',
                                route: PATH.PHONEME_LEVEL,
                                links: []
                            },
                            {
                                name: 'Validated Files',
                                route: PATH.CHECKING_STATUS,
                                links: []
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Upload Audio/Video',
                route: PATH.UPLOAD_AUDION_VIDEO_PATH,
                links: [
                    {
                        name: 'Checking',
                        route: PATH.CHECKING,
                        links: [
                            {
                                name: 'Checking Status',
                                route: PATH.CHECKING_STATUS,
                                links: []
                            },
                            {
                                name: 'All Checked Audios',
                                route: PATH.ALL_CHECKED_AUDIOS,
                                links: []
                            }
                        ]
                    },
                    {
                        name: 'Annotaion',
                        route: PATH.ANNOTAION,
                        links: [
                            {
                                name: 'Sentence Level',
                                route: PATH.SENETENCE_LEVEL,
                                links: []
                            },
                            {
                                name: 'Word Level',
                                route: PATH.WORD_LEVEL,
                                links: []
                            },
                            {
                                name: 'Phoneme Level',
                                route: PATH.PHONEME_LEVEL,
                                links: []
                            },
                            {
                                name: 'Annotated Files',
                                route: PATH.ANNOTATED_FILES,
                                links: []
                            },
                        ]
                    },
                    {
                        name: 'Validation',
                        route: PATH.VALIDATION,
                        links: [
                            {
                                name: 'Sentence Level',
                                route: PATH.SENETENCE_LEVEL,
                                links: []
                            },
                            {
                                name: 'Word Level',
                                route: PATH.WORD_LEVEL,
                                links: []
                            },
                            {
                                name: 'Phoneme Level',
                                route: PATH.PHONEME_LEVEL,
                                links: []
                            },
                            {
                                name: 'Validated Files',
                                route: PATH.CHECKING_STATUS,
                                links: []
                            },
                        ]
                    },
                ]
            }
        ]
    }


    // {
    //     name: 'Script',
    //     route: PATH.SCRIPT,
    //     icon: '',
    //     link: []
    // }
]
export default SideDrawerLink;