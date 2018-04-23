import React, { Component } from 'react';
import Info from './Info/Info';
import List from './List/List';
import Select from './Select/Select';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {  
        first_name: '',
        last_name: '',
        district: '',
        phone: '',
        office: '',
        link: ''
      },
      rep: '',
      state: '',
      results: [],
      list_rep: '',
      showError: false
    }

    this.updateSelected = this.updateSelected.bind(this);
    this.findReps = this.findReps.bind(this);
    this.viewInfo = this.viewInfo.bind(this);
  }

  updateSelected(select, val) {
    this.setState({
      [select]: val
    })
  }

  viewInfo(selected) {
    let first_name = selected.name.split(' ').shift();
    let last_name = selected.name.split(' ').pop(); 
    let rep = {  
      first_name,
      last_name,
      district: selected.district,
      phone: selected.phone,
      office: selected.office,
      link: selected.link
    }
    this.setState({
      info: rep
    });
  }

  async findReps() {
    try {
      let response = await axios.get(`/${this.state.rep}/${this.state.state}`);
      if(response.data.success) {
        this.setState({
          results: response.data.results,
          info: {  
            first_name: '',
            last_name: '',
            district: '',
            phone: '',
            office: '',
            link: ''
          },
          list_rep: this.state.rep.charAt(0).toUpperCase() + this.state.rep.slice(1)
        });
      } else {
        this.setState({
          results: [{name: 'There are no represenatives for this selection.'}],
          list_rep: this.state.rep.charAt(0).toUpperCase() + this.state.rep.slice(1)
        });
      }
    } catch(err) {
      this.setState({
        showError: true
      }, 
      () => {
        setTimeout(() => {
          this.setState({
            showError: false
          })
        }, 2000)
      })
      throw err; 
    }
  }

  render() {

    return (
      <div className="app_container">
        <header>
          <h1>Who's My Representative?</h1>
        </header>
        <Select 
          rep={ this.state.rep } 
          state={ this.state.state }
          updateSelected={ this.updateSelected }
          findReps={ this.findReps }/>
        <p className='app_error'>
          { this.state.showError ? 'It appears something went wrong, please try again!' : null }
        </p>
        <main className='app_main'>
          <List 
            results={ this.state.results }
            viewInfo={ this.viewInfo }
            list_rep={ this.state.list_rep }/>
          <Info info={ this.state.info }/>
        </main>
      </div>
    );
  }
}

export default App;
