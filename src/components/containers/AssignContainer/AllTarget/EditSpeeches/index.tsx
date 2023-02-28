import BackButtonTitle from '../../../../common/BackButtonTitle';
import Layouts from '../../../../Layouts';
import Table from '../../../../Table';
import SpeechHeader from './SpeechHeader';


const data: any = [
    {
        id: '1',
        speaker: [
            {
                name: 'Maksuda Alam',
                gender: 'male',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam1@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
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
        speech: null,
        // role: {
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
                id: "maksudalam3@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
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
        speech: null,
        speeches: '800',
        maxSpeeches: '2000',
        remark: "This Is Remark data",
        role: 'Team Leader'

    },
    {
        id: '3',
        speaker: [],
        collector: {},
        recordingArea: '',
        device: '',
        speech: null,
        recordingDistance: 'Close',
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
                id: "maksudalam5@gmail.com"
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
        speeches: '800',
        speech: null,
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
                id: "maksudalam6@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
                id: "maksudalam7@gmail.com"
            }
        ],
        collector: {},
        recordingArea: 'Inside Room',
        recordingDistance: 'Close',
        device: 'Redmi Note 8',
        speeches: '800',
        speech: null,
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
        speeches: '800',
        maxSpeeches: '3000',
        remark: "",
        speech: null,


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
                id: "maksudalam8@gmail.com"
            },
            {
                name: 'Bilkis banu',
                gender: 'female',
                role: 'speaker',
                contact: '019',
                address: 'Dhaka',
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
        speeches: '800',
        speech: null,
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