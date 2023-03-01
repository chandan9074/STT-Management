import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import TableIndex from './PdfTable/TableIndex';
import { STTMODULE, TTSMODULE } from '../../helpers/ConditionVariable';
import { forwardRef } from 'react';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,

    },
    title: {
        fontSize: 12,
        textAlign: 'left',
        marginBottom: 5

    },
    author: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 40,
    },

    header: {
        fontSize: 10,
        textAlign: 'left',
        marginBottom: 5
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
    data: any,
    type: string,
    module: string
}
const Type1 = forwardRef((props: Props, ref: any) => {
    const { data, type, module } = props
    // const commonContext = useContext(CommonContext)

    const createData = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
        {
            name: "Age-wise",
            data: data.ageWise
        },
        {
            name: "Locality-wise",
            data: data.localityWise
        },
        {
            name: "Economic Situation-wise",
            data: data.economicSituationWise
        },
        {
            name: "Education-wise",
            data: data.educationWise
        },
        {
            name: "Profession-wise",
            data: data.professionWise
        },
        {
            name: "Recording Area",
            data: data.recordingArea
        },
        {
            name: "Recording Distance",
            data: data.recordingDistance
        },
    ]
    const collectData = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
        {
            name: "Age-wise",
            data: data.ageWise
        },
        {
            name: "Locality-wise",
            data: data.localityWise
        },
    ]
    const ttsDataCollection = [
        {
            name: "Distribution Source-wise",
            data: data.distributionSourceWise
        },
        {
            name: "Domain-wise",
            data: data.domainWise
        },
        {
            name: "Gender-wise",
            data: data.genderWise
        },
    ]


    return (
        <Document >
            <Page style={styles.body}>
                {
                    (type === "Create" && module === STTMODULE) && createData.map((data, index) =>
                        <>
                            {
                                index > 0 ?
                                    <View key={index}
                                        break
                                    >
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                                    : <View key={index}>
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                            }
                        </>

                    )
                }

                {
                    (type === "Collect" && module === STTMODULE) && collectData.map((data, index) =>
                        <>
                            {
                                index > 0 ?
                                    <View key={index}
                                        break
                                    >
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                                    : <View key={index}>
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                            }
                        </>

                    )
                }



                {
                    (type === "Create" && module === TTSMODULE) && ttsDataCollection.map((data, index) =>
                        <>
                            {
                                index > 0 ?
                                    <View key={index}
                                        break
                                    >
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                                    : <View key={index}>
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                            }
                        </>

                    )
                }

                {
                    (type === "Collect" && module === TTSMODULE) && ttsDataCollection.map((data, index) =>
                        <>
                            {
                                index > 0 ?
                                    <View key={index}
                                        break
                                    >
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                                    : <View key={index}>
                                        <Text style={styles.header} fixed>
                                            {module.toLocaleUpperCase()}-{type.toLocaleUpperCase()} DATA
                                        </Text>
                                        <Text style={styles.title}>{data.name} data distribution</Text>
                                        <Text style={styles.author}>(valid: 1000h, last update: 22 Aug 2022)</Text>

                                        <TableIndex data={data.data} headerName={data.name} />
                                    </View>
                            }
                        </>

                    )
                }


                {/* <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed /> */}
            </Page>
        </Document>
    );
});

export default Type1;