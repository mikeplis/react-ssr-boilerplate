/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import { Hello } from '../index';

storiesOf('Hello', module)
    .addDecorator(story => <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>)
    // .add('test', () => <Hello data={{ loading: true }} t={key => key} />);
    .add('test', () => <Hello />);
