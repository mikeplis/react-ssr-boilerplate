import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <ul>
            <li>
                <Link to="/hello">Hello</Link>
            </li>
            <li>
                <Link to="/foo">Foo</Link>
            </li>
        </ul>
    );
};
