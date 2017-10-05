import React from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { css } from 'emotion';
import styled from 'react-emotion';
import { translate, Trans } from 'react-i18next';

const testStyle = css`color: red;`; // this is a class name
const Paragraph = styled.div`color: green;`; // this is a component
const UnusedParagraph = styled.div`color: blue;`; // these styles won't be included in critical styles

// eslint-disable-next-line react/prop-types
export const Hello = ({ data, t }) => {
    const { loading, hello } = data;
    return (
        <div>
            {loading ? <div>Loading...</div> : <h1 className={testStyle}>{hello}</h1>}
            <Paragraph>
                <Trans>This is a missing translation</Trans>
            </Paragraph>
            {false && <UnusedParagraph>This is hidden</UnusedParagraph>}
            <h2>{t('Welcome to Razzle')}</h2>
        </div>
    );
};

const query = gql`
    {
        hello
    }
`;

// export default graphql(query)(Hello);
export default compose(graphql(query), translate('translations', { wait: process && !process.release }))(Hello);
