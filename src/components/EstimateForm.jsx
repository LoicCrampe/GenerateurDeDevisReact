import React, { Component } from "react";
import Item from './Item';
import {renderPDFInDom} from './PdfMaker';
import InputText from './InputText';

class EstimateForm extends Component {
    state = {
        id: "",
        title: "",
        customerFirstName: "",
        customerLastName: "",
        items: {}
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("Généré");
    };

    handleChange = (event, name) => {
        const value = event.currentTarget.value;
        console.log(name, value);
        this.setState({
            [name]: value
        });
    };

    addItem = () => {
        const id = Date.now().toString();
        const items = { ...this.state.items };
        console.log(this, items);
        items[id] = {
            id: id,
            description: "",
            quantity: "1",
            taxe: 0.2,
            amount: 0
        };
        this.setState({ items: items });
    }

    handleItemChange = (event, item, field) => {
        console.log(event.currentTarget.value, item, field);
        const value = event.currentTarget.value;
        const clonedItem = {...item};
        clonedItem[field] = value;
        const cloneItems = {...this.state.items};
        cloneItems[clonedItem.id] = clonedItem;
        this.setState({
            items: cloneItems
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>Nouveau Devis</div>
                <form onSubmit={this.handleSubmit}>
                    <InputText label='id' name='id' value={this.state.id} onChange={this.handleChange} />
                    <InputText label='Titre du devis' name='title' value={this.state.title} onChange={this.handleChange} />
                    <InputText label='Prénom du client' name='customerFirstName' value={this.state.customerFirstName} onChange={this.handleChange} />
                    <InputText label='Nom du client' name='customerLastName' value={this.state.customerLastName} onChange={this.handleChange} />
                    <button onClick={this.addItem} >Ajouter une ligne</button>
                    {Object.keys(this.state.items).map((itemId, index) => (
                        <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />
                    ))}
                    <button onClick={() => renderPDFInDom(this.state)}>Générer le devis</button>
                </form>
            </React.Fragment>
        );
    }
}

export default EstimateForm;
