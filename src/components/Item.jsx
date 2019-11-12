import React from 'react';

const Item = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input type="text" name="Description" value={props.item.description} onChange={event => props.onItemChange(event, props.item, "description")} />
                    </div>
                    <div className="col">
                        <input type="number" name="Quantité" value={props.item.quantity} onChange={event => props.onItemChange(event, props.item, "quantity")} />
                    </div>
                    <div className="col">
                        <input type="text" name="taxe" value={props.item.taxe} onChange={event => props.onItemChange(event, props.item, "taxe")} />
                    </div>
                    <div className="col">
                        <input type="text" name="Montant" value={props.item.amount} onChange={event => props.onItemChange(event, props.item, "amount")} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Item;