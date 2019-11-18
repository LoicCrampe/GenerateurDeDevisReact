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

const generateCorrespondingSpace = sentence => ' '.repeat(sentence.length)

const totals = {
    totalWithoutTaxes: 0,
    taxes: 0,
    totalTaxeIncluded: 0
}

const totalWithoutTaxes = (items) => {
    const resultWithoutTaxes = Object.keys(items)
        .map(key => {
            const amount = parseFloat(items[key].amount, 10);
            const quantity = parseFloat(items[key].quantity, 10);
            return (amount * quantity)
        })
        .reduce((accumulator, current) => accumulator + current, 0);

        return totals.totalWithoutTaxes = parseFloat(resultWithoutTaxes.toFixed(2));
}

const totalTaxeIncluded = (items) => {
    const resultTaxeIncluded = Object.keys(items)
        .map(key => {
            const amount = parseFloat(items[key].amount,10);
            const quantity = parseInt(items[key].quantity, 10);
            const taxe = parseFloat(items[key].taxe, 10);
            totals.taxes += (amount * quantity * 0.2);
            const result = ((amount * quantity) + (amount * quantity * taxe));
            return result;
        })
        .reduce((accumulator, current) => accumulator + current, 0);
        return totals.totalTaxeIncluded = parseFloat(resultTaxeIncluded.toFixed(2));
}

const MyDocument = ({text}) => (
    
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Devis : {text.title}</Text>
                <Text>n°: {text.id}</Text>
                <Text>Client : {text.customerFirstName} {text.customerLastName}</Text>
                <Text>Articles :</Text>

                {Object.keys(text.items).map((key, index) => (
                    <Text key={key}>
                        {text.items[key].quantity} &nbsp;
                        {text.items[key].description} &nbsp;
                        {parseFloat(text.items[key].taxe) * 100}% &nbsp;
                        {text.items[key].amount} €
                    </Text>
                ))}
            </View>
        </Page>
    </Document>
);

export const renderPDFInDom = (text) => {
    console.log(text)
    const Wrapper = () => (
        <PDFViewer>
            <MyDocument text={text} />
        </PDFViewer>
    );

    ReactDOM.render(<Wrapper />, document.getElementById("pdf"));

};