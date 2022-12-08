import React from 'react';
import Input from '../../../common/input/input';
import Select from '../../../common/Select/Select';
import "./filter.css";
import { CATAGORIES } from '../../../common/data/constants.js';
import Checkbox from '../cheak-box/Checkbox';
import { useParams } from '../../../hooks/params.item';
import useToggle from '../../../hooks/toggole-hook';



/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */


const Filter = (props) => {
  const { myParams, setParam } = useParams();

  return (
    <div>
      <div className='beside' ><Input
        label='Search'
        type={"search"}
        value={myParams.searchURL || ""}
        placeholder="Search"
        onChange={e => setParam('searchTerms', e.target.value)} ></Input>




        <span className='Minclass'><Input
          type={"number"}
          value={myParams.MINParams || ""}
          label='Min'
          onChange={e => setParam("Min", e.target.value)}
        ></Input>
        </span>

        <span>------</span>
        <span className='Maxclass'><Input
          type={"number"}
          value={myParams.MAXParams || ""}
          label="Max"
          onChange={e => setParam("Max", e.target.value)}
        >
        </Input></span>


      </div>
      <div className="flex1">{
        CATAGORIES.map(val => (
          <Checkbox
            key={val}
            label={val}
            checked={myParams.categoryParams.includes(val)}
            onChange={e => {

              const updated = e.target.checked
                ? [...myParams.categoryParams, val]
                : myParams.categoryParams.filter(category => category !== val);

              setParam('category', updated);
            }}




          />


        ))
      } <div className='Tourist'>
      <Checkbox label='Tourist' checked={props.isTourist} onChange={() => props.toggleIsTourist()} ></Checkbox>
    </div> </div>
     
    </div>
  );
};

export default Filter;