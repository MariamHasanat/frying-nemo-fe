import './form.css';
import React, { useState } from 'react';


const Form = (props) => {

    /**
     * @param {React.FocusEvent<HTMLFormElement>} e
     */
    const submitHandler = (e) => {
        e.target.preventDefault();
        console.log(e.target.name);
    };

    const [name, setName] = useState('');
    return (
        <form className='form'>
            <input
                type="text"
                name='name'
                placeholder='Name'
                value={name}
                onChange={(e) => { setName(e.target.value); }}
            />
            <div className='sub'>
                <input type="submit" onSubmit={submitHandler} />
            </div>
        </form>
    );
};

export default Form;