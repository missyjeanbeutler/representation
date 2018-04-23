import React from 'react';
import './Info.css';

export default function Info({info}) {
  return (
    <div className='info_container'>
      <h2>Info</h2>
      <section className='info_details'>
        <div>
          <h3>First Name</h3>
          <p>{ info.first_name }</p>
        </div>
        <div>
          <h3>Last Name</h3>          
          <p>{ info.last_name }</p>
        </div>
        <div>
          <h3>District</h3>            
          <p>{ info.district }</p>
        </div>
        <div>
          <h3>Phone</h3>            
          <p>{ info.phone }</p>
        </div>
        <div>
          <h3>Office</h3>            
          <p>{ info.office }</p>
        </div>
        <div>
          <h3>Website</h3>            
          <a href={ info.link } target='_blank'>
            { info.link ? 'Click here' : null }
          </a>
        </div>
      </section>
    </div>
  );
}