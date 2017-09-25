import React from 'react';
import { graphql, gql } from 'react-apollo';

import TestNav from '../TestNav';

// eslint-disable-next-line react/prop-types
const Foo = ({ data }) => {
    const { loading, foo } = data;
    return (
        <div>
            <TestNav />
            {loading ? <div>Loading...</div> : <h1>{foo}</h1>}
        </div>
    );
};

const query = gql`
    {
        foo
    }
`;

export default graphql(query)(Foo);
