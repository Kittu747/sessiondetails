import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import logo from '../../Assets/college_icon.png';

console.log(window.location.pathname);

const navbar = (props) => {
    return (
        <div>
            <div className='topnavbar'>
                <div style={{float: 'left'}}>
                    <div style={{fontWeight: 'bold', margin: '15px'}}>Sessions <FontAwesomeIcon icon={faAngleRight} /> </div>
                </div>
                <div style={{float: 'right'}}>
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}

export default navbar;