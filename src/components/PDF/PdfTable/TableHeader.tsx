import React from 'react';
import { View, StyleSheet, Text } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: "row",
        border: "1px solid black",


    },
    tableHeader: {
        borderRight: "1px solid black",
        padding: "5px",
        backgroundColor: '#D1D3D6',
        fontSize: "9px",
        fontWeight: "bold",
        width: "100%"
    },
    tableHeaderLast: {
        padding: "5px",
        backgroundColor: '#D1D3D6',
        fontSize: "9px",
        fontWeight: "normal",
        width: "100%"
    }

});
interface Props {
    tableheaderdata: any
}
const TableHeader = ({ tableheaderdata }: Props) => {

    return (
        <View
            style={styles.tableContainer}
        >
            {
                tableheaderdata.map((data: any, index: number) =>
                    <Text
                        style={tableheaderdata.length - 1 === index ? styles.tableHeaderLast : styles.tableHeader}
                        key={index}
                    >
                        {data}
                    </Text>
                )
            }



        </View>
    );
};

export default TableHeader;