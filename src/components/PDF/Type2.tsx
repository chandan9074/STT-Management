import { Document, StyleSheet, Page, Text, Font } from '@react-pdf/renderer';
import React from 'react';


Font.register({
    family: 'AdorshoLipi',
    src: "",
});

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'left',
        marginBottom: 20,

    },
    author: {
        fontSize: 14,
        textAlign: 'left',
    },
    id: {
        fontSize: 14,
        textAlign: 'right',
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: "AdorshoLipi"

    },
    ref: {
        fontSize: 14,
        textAlign: 'left',
    },

    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

interface Props {
    data: any
}
const Type2 = ({ data }: Props) => {
    return (
        <Document>
            <Page style={styles.body}>

                <Text style={styles.title}>Subject:{data.title}</Text>
                <Text style={styles.author}>Source Type:{data.distributionSource}</Text>
                <Text style={styles.author}>Domain:{data.domain}</Text>
                <Text style={styles.id}>
                    ID:{data.id}
                </Text>
                <Text style={styles.ref}>
                    Ref:
                </Text>



                <Text style={styles.text}>
                    {data.description}
                </Text>




                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    );
};

export default Type2;