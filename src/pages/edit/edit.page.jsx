import './edit.css';
import Loading from '../../components/common/loading/loading.component';
import EditForm from '../../components/edit/form/form.component';
import { useNavigate, useParams } from 'react-router-dom';
import { getItem } from '../../services/items';
import { useEffect, useState } from 'react';

const Editpage = () => {
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const getCurrentItem = () => {
        const item = getItem(params.id)
            .then((res) => {
                if (item) { setCurrentItem(res); console.log('res', res); }
                else navigate("/404", { replace: true });
            }).catch((err) => console.error(err));
        setLoading(false);
    };

    useEffect(() => {
        getCurrentItem();

    }, [params.id]);

    return (
        <div className='edit-page'>
            <h1>edit item</h1>
            {loading? <Loading/> : null}
            <div className="main">
                <EditForm currentItem={currentItem} />
            </div>
        </div >

    );
};

export default Editpage;