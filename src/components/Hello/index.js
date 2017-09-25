import React from 'react';
import { graphql, gql } from 'react-apollo';

import TestNav from '../TestNav';

const Hello = ({ data }) => {
    const { loading, hello } = data;
    return (
        <div>
            <TestNav />
            {loading ? <div>Loading...</div> : <h1>{hello}</h1>}
        </div>
    );
};

const query = gql`
    {
        hello
    }
`;

export default graphql(query)(Hello);
