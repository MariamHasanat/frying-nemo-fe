import React from 'react';
import Input from '../../../common/input/input';
import Select from '../../../common/Select/Select';
import "./filter.css";
import { CATAGORIES } from '../../../common/data/constants.js';
import Checkbox from '../cheak-box/Checkbox';



/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */


const Filter = (props) => {


  return (
    <div>
      <div className='beside' ><Input
        label='Search'
        type={"search"}
        value={props.searchURL}
        placeholder="Search"
        onChange={e => props.setParam('searchTerms', e.target.value)} ></Input>




        <span className='Minclass'><Input
          type={"number"}
          value={props.MINParams}
          label='Min'
          onChange={e => props.setParam("Min", e.target.value)}
        ></Input>
        </span>

        <span>------</span>
        <span className='Maxclass'><Input
          type={"number"}
          value={props.MAXParams}
          label="Max"
          onChange={e => props.setParam("Max", e.target.value)}
        >
        </Input></span>


      </div>
      <div className="flex1">{
        CATAGORIES.map(val => (
          <Checkbox
          key={val}
          label={val}
          checked={props.categories.includes(val)}
          onChange={e => {
            console.log(val)
            const updated = e.target.checked
              ? [...props.categories, val]
              : props.categories.filter(category => category !== val);

              props.setParam('category', updated);
          }}




          />

        ))

      }</div>
    </div>
  );
};

export default Filter;