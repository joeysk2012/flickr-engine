import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props){
      super(props)
        this.state={
        text : ''
        }
    }

    handleText = (e) => {
        this.setState({text: e.target.value});
    }

    handleChange = (e) => {
        e.preventDefault();
        this.props.onChange(this.state.text);
        console.log(this.state.text)
    }
      
    render() {
      return (
        <form>
            <label>
                Search:
                <input type="text" placeholder="Search Photos.." onChange={(e) => this.handleText(e)} style={{marginLeft:10, height: 20}}/>
            </label>
            <button type="submit" onClick = {(e) => this.handleChange(e)} style={{height: 25}}>Search Photos!</button>
        </form>
      );
    }
  }

  SearchBar.propTypes = {
      onChange: PropTypes.func.isRequired,
  };
  
  export default SearchBar;