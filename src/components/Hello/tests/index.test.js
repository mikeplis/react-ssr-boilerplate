/**
 * You could have a single storyshots.test.js file at the root of the project and call initStoryshots once
 * to initialize all of your storyshot tests, but then all of the generated snapshots would be in that single folder.
 * Also, initializing storyshot tests for each component gives you the flexibility to configure them differently
 * for different components.
 */
import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';

/**
 * Non-shallow storyshots work with translations if you add a decorator to your story that wraps your component in a I18nextProvider
 * Removing the decorator causes both the test and story to fail with a `Cannot read property 'options' of undefined` because i18n is not defined in context
 * Shallow rendering doesn't really work for components with translations
 */

// initStoryshots({
//     test: shallowSnapshot,
//     storyKindRegex: /^Hello$/
// });
initStoryshots({
    storyKindRegex: /^Hello$/
});
