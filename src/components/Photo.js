import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
    return(
        <img className='photo' src={props.src} alt={props.title} height="20%" width="20%"/>
    ); 
}

Photo.defaultProps = {
    src: '',
    title: ''
}

Photo.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default Photo;
