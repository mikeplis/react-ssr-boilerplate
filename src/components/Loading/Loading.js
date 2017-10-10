import React from 'react';
import { I18n } from 'react-i18next';

export default () => {
    return <I18n>{t => <div>{t('Loading')}...</div>}</I18n>;
};
