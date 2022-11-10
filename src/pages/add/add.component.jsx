import './add.css';
import { useState, useEffect } from 'react';
import Form from '../../components/add/form/form.component';
import WithBorders from '../../components/common/with-borders/with-borders.components';

const AddPage = (props) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            console.log('time is being updated');
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='add-page'>
            <h3 className='clock'>time now: {time.toLocaleTimeString()}</h3>
            <WithBorders>
                <h1>Add a new item</h1>
            </WithBorders>
            <div className="main">
                <Form />
            </div>
        </div >

    );
};

export default AddPage;