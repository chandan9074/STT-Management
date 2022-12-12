import managerImage from "../assets/Icons/manager.png";

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

// totalAmountsDisbursed: 500 ,
//     totalValid: 340,

const managerDisbursementData = {
    data:
        {
            totalAmountsDisbursed: 5000 ,
            totalValid: 340,
            disbursementData: [
                {
                    id: 1,
                    year: 2022,

                    yearData: [
                        {
                            id: 100,
                            // month: "Jan",
                            month: 'January',
                            valid: 20,
                            amount: 50000,
                        },

                        {
                            id: 101,
                            // month: "Jan",
                            month: 'February',
                            valid: 20,
                            amount: 900000,
                        },
                        {
                            id: 102,
                            // month: "Jan",
                            month: 'March',
                            valid: 20,
                            amount: 25000,
                        },
                        {
                            id: 103,
                            // month: "Jan",
                            month: 'April',
                            valid: 20,
                            amount: 10000,
                        },
                        {
                            id: 104,
                            // month: "Jan",
                            month: 'May',
                            valid: 20,
                            amount: 70000,
                        },
                        {
                            id: 105,
                            // month: "Jan",
                            month: 'June',
                            valid: 20,
                            amount: 33000,
                        },
                        {
                            id: 106,
                            // month: "Jan",
                            month: 'July',
                            valid: 20,
                            amount: 40000,
                        },
                        {
                            id: 107,
                            // month: "Jan",
                            month: 'August',
                            valid: 20,
                            amount: 98000,
                        },
                        {
                            id: 108,
                            // month: "Jan",
                            month: 'September',
                            valid: 20,
                            amount: 65000,
                        },
                        {
                            id: 109,
                            // month: "Jan",
                            month: 'October',
                            valid: 20,
                            amount: 21000,
                        },
                        {
                            id: 110,
                            // month: "Jan",
                            month: 'November',
                            valid: 20,
                            amount: 12000,
                        },
                        {
                            id: 111,
                            // month: "Jan",
                            month: 'December',
                            valid: 20,
                            amount: 77000,
                        },
                    ]
                },
                {
                    year: 2021,
                    yearData: [
                        {
                            month: "Jan",
                            amount: 200
                        }
                    ]
                }
            ]
        }
}

const managerDisbursementsDatas = {
    data: [
        {
            id: 1,
            totalAmounts: 50000,
            totalValid: 50,
            year: 2022,
            month: 'January',
            disbursements: [
                {
                    date: '15 January',
                    valid: 20,
                    amount: 150,
                },
                {
                    date: '20 January',
                    valid: 30,
                    amount: 50
                },
            ]
        },
        {
            id: 2,
            totalAmounts: 60000,
            totalValid: 80,
            year: 2022,
            month: 'February',
            disbursements: [
                {
                    date: '15 February',
                    valid: 50,
                    amount: 50,
                },
                {
                    date: '20 February',
                    valid: 30,
                    amount: 250
                },
            ]
        },
        {
            id: 3,
            totalAmounts: 15000,
            totalValid: 150,
            year: 2022,
            month: 'March',
            disbursements: [
                {
                    date: '5 March',
                    valid: 50,
                    amount: 150,
                },
                {
                    date: '30 March',
                    valid: 150,
                    amount: 50
                },
            ]
        },
        {
            id: 4,
            totalAmounts: 500,
            totalValid: 30,
            year: 2022,
            month: 'April',
            disbursements: [
                {
                    date: '15 April',
                    valid: 20,
                    amount: 300,
                },
                {
                    date: '20 April',
                    valid: 10,
                    amount: 200
                },
            ]
        },
        {
            id: 5,
            totalAmounts: 7000,
            totalValid: 200,
            year: 2022,
            month: 'May',
            disbursements: [
                {
                    date: '6 May',
                    valid: 150,
                    amount: 500,
                },
                {
                    date: '22 May',
                    valid: 50,
                    amount: 200
                },
            ]
        },

        {
            id: 12,
            totalAmounts: 2000,
            totalValid: 130,
            year: 2022,
            month: 'Jun',
            disbursements: [
                {
                    date: '8 Jun',
                    valid: 30,
                    amount: 400,
                },
                {
                    date: '27 Jun',
                    valid: 100,
                    amount: 400
                },
            ]
        },
        {
            id: 6,
            totalAmounts: 40000,
            totalValid: 250,
            year: 2022,
            month: 'July',
            disbursements: [
                {
                    date: '30 July',
                    valid: 50,
                    amount: 400,
                },
                {
                    date: '2 July',
                    valid: 100,
                    amount: 300
                },
                {
                    date: '1 July',
                    valid: 100,
                    amount: 200
                },
            ]
        },
        {
            id: 7,
            totalAmounts: 1200,
            totalValid: 330,
            year: 2022,
            month: 'August',
            disbursements: [
                {
                    date: '15 August',
                    valid: 300,
                    amount: 1000,
                },
                {
                    date: '20 August',
                    valid: 300,
                    amount: 220
                },
            ]
        },
        {
            id: 8,
            totalAmounts: 35000,
            totalValid: 400,
            year: 2022,
            month: 'September',
            disbursements: [
                {
                    date: '4 September',
                    valid: 200,
                    amount: 1300,
                },
                {
                    date: '27 September',
                    valid: 200,
                    amount: 200
                },
            ]
        },
        {
            id: 9,
            totalAmounts: 650,
            totalValid: 20,
            year: 2022,
            month: 'October',
            disbursements: [
                {
                    date: '15 October',
                    valid: 200,
                    amount: 600,
                },
                {
                    date: '20 October',
                    valid: 50,
                    amount: 50
                },
            ]
        },
        {
            id: 10,
            totalAmounts: 30000,
            totalValid: 500,
            year: 2022,
            month: 'November',
            disbursements: [
                {
                    date: '15 November',
                    valid: 200,
                    amount: 1500,
                },
                {
                    date: '20 November',
                    valid: 300,
                    amount: 500
                },
            ]
        },
        {
            id: 11,
            totalAmounts: 25000,
            totalValid: 40,
            year: 2022,
            month: 'December',
            disbursements: [
                {
                    date: '15 December',
                    valid: 200,
                    amount: 200,
                },
                {
                    date: '20 December',
                    valid: 200,
                    amount: 1000
                },
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


export default class ManagerService {


    static getManagerDisbursement(params: any) {
        // return axios.get(GET_MANAGERS_URL, {params})
        // return managerDisbursementsDatas;
        return managerDisbursementData;
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