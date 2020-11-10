import React from 'react';
import styled from 'styled-components';

const StyledDiv  = styled.div`
    background: #047;
    color: white;
    padding: 8px 32px;
    font-weight: bolder;
`;

const Header = () => {
    return (
        <StyledDiv className="header">
            Show Finder
        </StyledDiv>
    )
}

export default Header;