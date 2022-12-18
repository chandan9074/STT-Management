export const timeWiseDisbursement = {
    role: "Manager",
    type: "stt",
    totalDisbursedAmount:5000,
    totalValidHours: 340,
    data: [
        {
            year: 2022,
            month: "Jan",
            totalAmount: 360000,
            totalHours: 50,
            disbursed: [
                {
                    amount: 900,
                    day: "15 jan",
                    hours: 30
                },
                {
                    amount: 100,
                    day: "30 jan",
                    hours: 20
                },

            ]
        },
        {
            year: 2022,
            month: "Feb",
            totalAmount: 90000,
            totalHours: 50,
            disbursed: [
                {
                    amount: 900,
                    day: "30 Feb",
                    hours: 30
                },
                {
                    amount: 100,
                    day: "20 Feb",
                    hours: 20
                },

            ]
        },
        {
            year: 2022,
            month: "March",
            totalAmount: 1000,
            totalHours: 50,
            disbursed: [
                {
                    amount: 900,
                    day: "1 March",
                    hours: 30
                },
                {
                    amount: 100,
                    day: "16 March",
                    hours: 20
                },

            ]
        },
        {
            year: 2022,
            month: "April",
            totalAmount: 1000,
            totalHours: 50,
            disbursed: [
                {
                    amount: 900,
                    day: "3 April",
                    hours: 30
                },
                {
                    amount: 100,
                    day: "4 April",
                    hours: 20
                },

            ]
        },
        {
            year: 2022,
            month: "Jan",
            totalAmount: 1000,
            totalHours: 50,
            disbursed: [
                {
                    amount: 900,
                    day: "15 jan",
                    hours: 30
                },
                {
                    amount: 100,
                    day: "30 jan",
                    hours: 20
                },

            ]
        }
    ]
}
//
// queryParam:{
//     role, type, from, to
// }