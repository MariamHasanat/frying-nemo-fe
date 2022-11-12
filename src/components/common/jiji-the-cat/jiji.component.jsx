import './jiji.css';

const Jiji = (props) => {
    return (
        <div className='jiji'>
            <h2>
                <img
                    alt='cat'
                    src="https://64.media.tumblr.com/718c1fbf3a9359e96ddd1174a41a2720/tumblr_opfl1y9hKn1tile93o1_540.gif"
                />
                <br />
                {props.message}
            </h2>
        </div>
    );
};

export default Jiji;