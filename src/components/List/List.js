import React from 'react';
import './List.css';

export default function List(props) {

  let formatted_results = props.results.map((e, i) => (
    <div 
      key={ e.name + i } 
      className={ e.party ? 'list_results' : '.list_results_none' }
      onClick={() => e.party ? props.viewInfo(e) : null }>
      <p>{ e.name }</p>
      <p>{ e.party ? e.party[0] : null }</p>
    </div>
  ))

  return (
    <div className='list_container'>
      <section className='list_heading'>
        <h2>List
          { props.list_rep ? ' / ' : null }
          <span>{ props.list_rep ? props.list_rep : null }</span>
        </h2>
        <div className='list_sub_heading'>
          <h4>Name</h4>
          <h4>Party</h4>
        </div>
      </section>
      <section>
        { formatted_results }
      </section>
    </div>
  )
}