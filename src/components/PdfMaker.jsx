import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        fontSize: 18,
        width: 200,
        '@media max-width: 400': {
            width: 300,
        },
        '@media orientation: landscape': {
            width: 400,
        },
    }
});

const MyDocument = (props) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>{props.text}</Text>
            </View>
        </Page>
    </Document>
);

export const renderPDFInDom = (text) => {
    const Wrapper = () => (
        <PDFViewer>
            <MyDocument text={text} />
        </PDFViewer>
    );

    ReactDOM.render(<Wrapper />, document.getElementById("pdf"));

};