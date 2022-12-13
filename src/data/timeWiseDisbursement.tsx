export const timeWiseDisbursement = {
    role: "Manager",
    type: "stt",
    totalDisbursedAmount:5000,
    totalValidHours: 340,
    data: [
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
                }
            ]
        }
    ]
}
//
// queryParam:{
//     role, type, from, to
// }