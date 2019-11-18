import React from 'react';

const InputText = (props) => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <label htmlFor="{props.name}">{props.label}</label>
                    </div>
                    <div className="col">
                        <input type="text" name={props.name} value={props.value} onChange={event => props.onChange(event, props.name)}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InputText;