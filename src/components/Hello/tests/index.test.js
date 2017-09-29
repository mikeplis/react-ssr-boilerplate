import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { Hello } from '../index';

const shallowRenderer = createRenderer();

describe('<Hello />', () => {
    it('renders loading', () => {
        const result = shallowRenderer.render(<Hello data={{ loading: true }} t={() => {}} />);
        expect(result).toMatchSnapshot();
    });

    it('renders data', () => {
        const result = shallowRenderer.render(<Hello data={{ hello: 'Hello World!' }} t={() => {}} />);
        expect(result).toMatchSnapshot();
    });
});
