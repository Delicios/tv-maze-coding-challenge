import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    background: #047;
    padding: 12px 16px;
    margin: 5px;
    color: white;
    font-weight: bolder;
    transition: ease .2s box-shadow, ease .1s background;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.0);
    cursor: pointer;
    
    &:hover, &:focus, &:active {
        background: rgba(0, 68, 119, .9);
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        outline: none;
    }
`;

const Button = ({...props}) => {
    const { type } = props;
    return (
        <StyledButton type={type}>{props.children}</StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string
}

export default Button;