import React from 'react';
import Input from '../../../common/input/input';
import Select from '../../../common/Select/Select';
import "./filter.css";
import { CATAGORIES } from '../../../common/data/constants.js';
import Checkbox from '../cheak-box/Checkbox';
import { useState } from 'react';


/**
 * Renders a filters bar.
 * @param {{
 *  searchTerms: string;
 *  categories: string[];
 *  setParam: (name: string, value: string | string[]) => void
 * }} props Component properties object.
 */


const Filter = (props) => {

  const [categories, Setcategories] = useState([])
  return (
    <div>
      <div className='beside' ><Input
        label='Search'
        type={"search"}
        value={props.searchURL}
        placeholder="Search"
        onChange={e => props.setParam('searchTerms', e.target.value)} ></Input>


        <span ><Select
          label='Category'
          value={props.categoryParams}
          onChange={e => props.setParam('category', e.target.value)}>
          <option value="">ALL</option>
          {CATAGORIES.map(item => {
            return <option value={item} key={item}>{item}</option>;
          })}  </Select></span>


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
            label={val}
            key={val}
            value={val}
            onClick={(e) => {
              if (!categories.includes(val)){
                categories.push(e.target.value)}
                else{
                 categories.pop(e.target.value)
                 }
                
              
            }}
            checked={categories.includes(val)}
         

            onChange={e => {
            
           
            var  updated = e.target.checked ? [...categories,val]
                : categories.filter(item=>item!==val)

                props.setParam('Single-category', updated);

               }}



          />

        ))

      }</div>
    </div>
  );
};

export default Filter;