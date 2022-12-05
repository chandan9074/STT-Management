import React from 'react';
import TimeWiseDisbursement from "./components/containers/billing/TimeWiseDisbursement";

const Test = () => {

    // params(year)
    const disbursements = [
        {
            id: 1,
            totalAmounts: 200,
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
            totalAmounts: 300,
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
            totalAmounts: 100,
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
            totalAmounts: 700,
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
            totalAmounts: 800,
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
            totalAmounts: 900,
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
            totalAmounts: 1500,
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
            totalAmounts: 2000,
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
            totalAmounts: 1200,
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
    return (
        <div>
            <TimeWiseDisbursement
                data={disbursements}
            />
        </div>
    );
};

export default Test;