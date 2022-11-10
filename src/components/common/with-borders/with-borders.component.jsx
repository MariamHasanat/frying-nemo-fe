import './with-borders.css';

const WithBorders = (props) => {
  return (
    <div className="withBorders">
      {props.children}
    </div>
  );
};

export default WithBorders;
