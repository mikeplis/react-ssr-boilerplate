/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from '../index';

storiesOf('Hello', module)
    .add('test', () => <Hello data={{ loading: true }} />);
