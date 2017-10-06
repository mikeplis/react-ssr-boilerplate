import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';

// XXX: I think this makes it impossible to do shallow rendering - https://github.com/storybooks/storybook/issues/995#issuecomment-318343185
//      A better, though less-than-ideal, solution might be to have each story add this decorator as needed
// NOTE: addDecorator needs to be called before `require.context`, or else the components won't have the proper context
//       https://github.com/storybooks/storybook/issues/879#issuecomment-315649025
addDecorator(story => <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
