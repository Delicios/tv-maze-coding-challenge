import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Button from '../Button';

const StyledDiv = styled.div`
    background: #eee;
    padding: 24px;
    max-width: 960px;
    margin: 100px auto 150px;
    display: grid;
    grid: auto-flow dense / 250px 1fr;
    
    @media only screen and (max-width: 600px) {
        padding: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;

const Heading = styled.h2`
    color: #047;
    font-weight: bolder;
`;

const Description = styled.div`
    color: #333;
    margin: 8px 32px;
    grid-column: auto;
    grid-row: auto;
`;

const Image = styled.img`
    max-width: 200px;
    padding: 10px;
    background: white;
    box-shadow: 0 0 25px rgba(0,0,0,.3);
    margin-top: -50px;
    @media only screen and (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
        max-width: 100%;
    }
`;

const handleClick = () => {
    console.log('hi');
}

const Listing = ({...props}) => {
    const { key, name, image, summary, link } = props;
    return (
        <StyledDiv key={key}>
            {image && 
                <Image src={image.medium} />
            }
            <Description>
                <Heading>{name}</Heading>
                {summary &&
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                }
                <Button onClick={handleClick}>More Information</Button>
            </Description>
        </StyledDiv>
    )
}

Listing.propTypes = {
    key: PropTypes.number,
    name: PropTypes.string.isRequired,
    image: PropTypes.object,
    summary: PropTypes.string,
    link: PropTypes.string,
}

export default Listing;