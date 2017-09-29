// copied from i18n razzle example

const i18n = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');

const options = {
    fallbackLng: 'en',
    load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '##### not used #####', // as we use full text keys in this sample
    saveMissing: true,
    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ',',
        format: (value, format, lng) => {
            if (format === 'uppercase') return value.toUpperCase();
            return value;
        }
    }
};

// for browser use xhr backend to load translations and browser lng detector
if (process && !process.release) {
    i18n
        .use(XHR)
        // .use(Cache)
        .use(LanguageDetector);
}

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options);

module.exports = i18n;
