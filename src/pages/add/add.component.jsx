import "./add.css";
import Form from "../../components/add/form/form.component";
import { useState } from "react";
import { useEffect} from "react";


const AddPage = (props) => {
  const [time, setTime] = useState(new Date());

  // useEffet will be called on function deadmount
  useEffect(() => {
    // reference to timer object
    const timer = setInterval(updateTime, 1000);

    // code to stop time interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  const updateTime = () => {
    setTime(new Date());
  };

  return (
    <div className="add-page">
      <span className="clock">&#x1F562; {time.toLocaleTimeString()}</span>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;
