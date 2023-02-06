import React from 'react';
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DISTRIBUSION_SOURCE } from '../../../helpers/ConditionVariable';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: "row",
        display: "flex"

    },
    tableHeader: {
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        padding: "5px",
        fontSize: "9px",
        fontWeight: "normal",
        width: "100%"
    },
    tableHeaderLast: {
        borderLeft: "1px solid black",
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
        padding: "5px",
        fontSize: "9px",
        fontWeight: "normal",
        width: "100%"
    }
});
interface Props {
    data: any,
    headerName: string;
}
const TableRow = (props: Props) => {
    const { data, headerName } = props

    return (
        <View
            style={styles.tableContainer}
        >

            <Text style={styles.tableHeader}>
                {data.name}
            </Text>
            {headerName === DISTRIBUSION_SOURCE && <Text style={styles.tableHeader}>
                {data.target}
            </Text>}
            <Text style={styles.tableHeader}>
                {data.totalReceived}
            </Text>
            <Text style={styles.tableHeader}>
                {data.totalValid}
            </Text>
            <Text style={styles.tableHeader}>
                {data.totalInvalid}
            </Text>
            <Text style={styles.tableHeaderLast}>
                {data.lastUpdate}
            </Text>




        </View>
    );
};

export default TableRow;