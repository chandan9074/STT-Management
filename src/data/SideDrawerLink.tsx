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