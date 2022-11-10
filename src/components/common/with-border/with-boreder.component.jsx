const withBorder = (props) =>{
  return (
    <div className="wothborder">
      {props.children}
    </div>
  );
};

export default withBorder;
