import React from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { css } from 'emotion';
import styled from 'react-emotion';
import { Trans, I18n } from 'react-i18next';

const testStyle = css`color: red;`; // this is a class name
const Green = styled.span`color: green;`; // this is a component
const Red = styled.div`color: red;`; // this is a component
const UnusedBlue = styled.div`color: blue;`; // these styles won't be included in critical styles

export const Hello = props => {
    const { data } = props; // eslint-disable-line react/prop-types
    const { loading, hello } = data;
    return (
        <I18n>
            {t => (
                <div>
                    {loading ? <div>Loading...</div> : <h1 className={testStyle}>{hello}</h1>}
                    <Trans>
                        This <Green>is a</Green> <Red>missing translation</Red>
                    </Trans>
                    {false && <UnusedBlue>This is hidden</UnusedBlue>}
                    <h2>{t('Welcome to Razzle')}</h2>
                </div>
            )}
        </I18n>
    );
};

const query = gql`
    {
        hello
    }
`;

export default compose(graphql(query))(Hello);
