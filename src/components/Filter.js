import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = () => {

    
        return (
        <div className="checkboxes">
            <Checkbox onClick={ascendingName()}/>
            <label>Name</label>
            <Checkbox/>
            <label>Age</label>
        </div>
        );
    
}

export default Filter;