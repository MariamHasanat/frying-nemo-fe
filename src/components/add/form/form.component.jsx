import './form.css';
import { useState } from 'react';
const Form = (props) => {
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
                <input type="submit"/>
            </div>
        </form>
    );
};

export default Form;