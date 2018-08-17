import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Photo from '../components/Photo';
import SearchBar from '../components/SearchBar';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      search_term : '',
      photos : []
    }
  } 

  handleChange = (val) => {
    const ccomp = this
    this.setState({search_term : val }, () => {  
      fetch('/api?search=' + this.state.search_term)
      .then(function (response){
        response.json().then(function(json){
          console.log(json.items)
          ccomp.setState({photos : json.items})
     })
    }).catch(function (error) {
        console.log(error);
    })
    })
  }

  componentWillMount(){
    const ccomp = this
    fetch('/api?search=cats')
      .then(function (response){
        response.json().then(function(json){
          ccomp.setState({photos : json.items})
     })
    }).catch(function (error) {
        console.log(error);
    })

  }

  render() {
    let photoItems = this.state.photos.map(item => <Photo key={item.link} src={item.media.m} title={item.title}/>)
    return (
      <div className='window'>
        <SearchBar onChange={this.handleChange}/>
        <div className='container'>
          {photoItems}
        </div>
      </div>
    );
  }
}

export default App;
