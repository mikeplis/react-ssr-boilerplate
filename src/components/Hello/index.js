import React from 'react';
import { graphql, gql } from 'react-apollo';
import { css } from 'emotion';
import styled from 'react-emotion';

import TestNav from '../TestNav';

const testStyle = css`color: red;`; // this is a class name
const Paragraph = styled.p`color: green;`; // this is a component
const UnusedParagraph = styled.p`color: blue;`; // these styles won't be included in critical styles

// eslint-disable-next-line react/prop-types
export const Hello = ({ data }) => {
    const { loading, hello } = data;
    return (
        <div>
            <TestNav />
            {loading ? <div>Loading...</div> : <h1 className={testStyle}>{hello}</h1>}
            <Paragraph>This is some text</Paragraph>
            {false && <UnusedParagraph>This is hidden</UnusedParagraph>}
        </div>
    );
};

const query = gql`
    {
        hello
    }
`;

export default graphql(query)(Hello);
