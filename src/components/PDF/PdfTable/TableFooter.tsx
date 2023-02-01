import React from 'react';
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DISTRIBUSION_SOURCE } from '../../../helpers/ConditionVariable';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: "row",
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "1px solid black",


    },
    tableHeader: {
        borderRight: "1px solid black",
        padding: "5px",
        fontSize: "9px",
        fontWeight: "bold",
        width: "100%"
    },
    tableHeaderLast: {
        padding: "5px",
        fontSize: "9px",
        fontWeight: "bold",
        width: "100%"
    }

});

interface Props {
    totalTerget: number;
    totalRecive: number;
    totalValid: number;
    totalInvalid: number;
    headerName: string

}
const TableFooter = (props: Props) => {
    const { totalTerget, totalRecive, totalValid, totalInvalid, headerName } = props;

    return (
        <View
            style={styles.tableContainer}
        >

            <Text style={styles.tableHeader}>
                Total
            </Text>
            {headerName === DISTRIBUSION_SOURCE && <Text style={styles.tableHeader}>
                {totalTerget}
            </Text>}
            <Text style={styles.tableHeader}>
                {totalRecive}
            </Text>
            <Text style={styles.tableHeader}>
                {totalValid}
            </Text>
            <Text style={styles.tableHeader}>
                {totalInvalid}
            </Text>
            <Text style={styles.tableHeader}>
            </Text>


        </View>
    )
};

export default TableFooter;