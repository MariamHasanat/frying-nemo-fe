import { useEffect, useState } from "react";
import Input from "../../components/common/input/input.component";
import Result from "../../components/test/result/result.component";

const Test = () => {

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('');
  const [name, setName] = useState('');

  const increaseCounter = () => {
    setColor(randColor);
    setCounter(counter + 1);
  };

  const randColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
  };

  useEffect(() => { increaseCounter(); }, [name]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: color }}>Test Page</h1>
      <h3>{counter}</h3>

      <Input
        label="dummy input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={() => increaseCounter()}>Add 1</button>
      <button type="button" onClick={() => { setCounter(0); setName('') }}>Reset</button>
      <Result counter={counter} />
    </div>
  );
};

export default Test;