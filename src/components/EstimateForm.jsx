import React, { Component } from "react";
import Item from './Item';
import {renderPDFInDom} from './PdfMaker';

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
            description: "description",
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
                    <input type="text" name="id" id="id" placeholder="ID" value={this.state.id} onChange={event => this.handleChange(event, 'id')} /><br />
                    <input type="text" name="title" id="title" placeholder="Titre du devis" value={this.state.title} onChange={event => this.handleChange(event, 'title')}/><br/>
                    <input type="text" name="ecustomerFirstName" id="customerFirstName" placeholder="Prénom" value={this.state.customerFirstName} onChange={event => this.handleChange(event, 'customerFirstName')} /><br />
                    <input type="text" name="customerLastName" id="customerLastName" placeholder="Nom" value={this.state.customerLastName} onChange={event => this.handleChange(event, 'customerLastName')} /><br />
                    <button onClick={this.addItem} >Ajouter une ligne</button>
                    {Object.keys(this.state.items).map((itemId, index) => (
                        <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />
                    ))}
                    <button onClick={() => renderPDFInDom(JSON.stringify(this.state))}>Générer le devis</button>
                </form>
            </React.Fragment>
        );
    }
}

export default EstimateForm;
