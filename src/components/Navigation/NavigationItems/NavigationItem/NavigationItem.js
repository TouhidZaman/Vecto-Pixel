import React from 'react';
import classes from './NavigationItem.module.css';
import CustomLink from '../../../navbar/CustomLink/CustomLink';

const navigationItem = (props) => {
    let activeStyle = {
        color: 'white',
        backgroundColor: '#0973b9',
        borderBottom: '4px solid red'
    }

    return (
        <li className={classes.NavigationItem}>
            <CustomLink activeStyle={activeStyle} to={props.link}>
                {props.children}
            </CustomLink>
        </li>
    )
}

export default navigationItem;