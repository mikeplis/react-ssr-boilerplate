/**
 * You could have a single storyshots.test.js file at the root of the project and call initStoryshots once
 * to initialize all of your storyshot tests, but then all of the generated snapshots would be in that single folder.
 * Also, initializing storyshot tests for each component gives you the flexibility to configure them differently
 * for different components (e.g. if one uses shallow rendering but another doesn't)
 */
import initStoryshots, { shallowSnapshot } from '@storybook/addon-storyshots';

// initStoryshots({
//     test: shallowSnapshot,
//     storyKindRegex: /^Hello$/
// });
initStoryshots({
    storyKindRegex: /^Hello$/
});
