import React from 'react';
import states from './states';
import './Select.css';

export default function Select(props) {

  let state_options = states.map((e, i) => (
    <option 
      key={ e.name + i }
      value={ e.abbreviation }>
      { e.name }
    </option>
  ))

  return (
    <div className='select_container'>
      <select 
        value={ props.rep }
        onChange={(e) => props.updateSelected('rep', e.target.value)}>
        <option disabled value=''>-- Select a Representative --</option>
        <option value="representatives">Representative</option>
        <option value="senators">Senator</option>
      </select>
      <select  
        value={ props.state }
        onChange={(e) => props.updateSelected('state', e.target.value)}>
        <option disabled value=''>-- Select a State --</option>
        { state_options }
      </select>
      <button 
        disabled={ props.rep && props.state ? false : true }
        onClick={ props.findReps }>View Representatives</button>
    </div>
  )
}