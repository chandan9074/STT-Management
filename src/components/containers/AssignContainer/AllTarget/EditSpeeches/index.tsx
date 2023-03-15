import { assignSpeechDT } from '../../../../../types/assignTypes';
import BackButtonTitle from '../../../../common/BackButtonTitle';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';
import SpeechHeader from './SpeechHeader';


const data: assignSpeechDT[] = [
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
];

const EditSpeeches = () => {
    return (
        <div>
            <Layouts.Default>
                <BackButtonTitle
                    title='Speech Upload'
                />

                <div className='mt-[9px] shadow-light-gray-4'>
                    <SpeechHeader />
                </div>

                <Table.Type11 data={data} />
            </Layouts.Default>
        </div>
    );
};

export default EditSpeeches;