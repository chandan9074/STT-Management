import managerImage from "../assets/Icons/manager.png";
import axios from "axios";
import {GET_TIME_WISE_DISBURSEMENTS_URL} from "../helpers/APIURL";
import {timeWiseDisbursement} from "../data/timeWiseDisbursement";

interface managerDisbursementInterface {
    data: [
        {
            id: number,
            year: number
            totalAmountsDisbursed: number ,
            totalValid: number,
            yearData: [
                {
                    id: number,
                    month: string,
                    valid: number,
                    amount: number,
                    totalAmounts: number,
                    totalValid: number,
                }
            ]
        }
    ]
}



const managerData: any = {
    data: [
        {
            id: '1',
            name: 'Maksuda Alam',
            role: 'Manager',
            contact: '01738463449',
            city: 'Dhaka',
            image: managerImage
        },
        {
            id: '2',
            name: 'Rahim',
            role: 'Manager',
            contact: '01938463449',
            city: 'Cumilla',
            image: managerImage
        },
        {
            id: '3',
            name: 'Karim',
            role: 'Manager',
            contact: '016738463449',
            city: 'Khulna',
            image: managerImage
        },
        {
            id: '4',
            name: 'Zobbar',
            role: 'Manager',
            contact: '01898463449',
            city: 'Barishal',
            image: managerImage
        }
    ]
}


export default class TimeWiseDisbursementService {

    static getManagerDisbursement(params: any) {
        return axios.get(GET_TIME_WISE_DISBURSEMENTS_URL, {params})
        // return timeWiseDisbursement;
    }


    static getManager(params: any) {
        // return axios.get(GET_MANAGERS_URL, {params})
        return managerData;
    }

    static getManagerById(id: any) {
        // return axios.get(`${GET_MANAGER_BY_ID_URL}/${id}`);
        return (managerData.data.filter((m: any) => m.id === id));
    }

    static deleteManager(id: any) {
        // return axios.delete(`${DELETE_BLOG_URL}/${id}`);
        return (managerData.data.filter((m: any) => m.id !== id));
    }
}