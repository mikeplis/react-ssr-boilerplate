import React from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { css } from 'emotion';
import styled from 'react-emotion';
import { translate, Trans, I18n } from 'react-i18next';

const testStyle = css`color: red;`; // this is a class name
const Paragraph = styled.div`color: green;`; // this is a component
const UnusedParagraph = styled.div`color: blue;`; // these styles won't be included in critical styles

// export const Hello = props => {
//     const { data, t } = props; // eslint-disable-line react/prop-types
//     const { loading, hello } = data;
//     return (
//         <div>
//             {loading ? <div>Loading...</div> : <h1 className={testStyle}>{hello}</h1>}
//             <Paragraph>
//                 <Trans t={t}>This is a missing translation</Trans>
//             </Paragraph>
//             {false && <UnusedParagraph>This is hidden</UnusedParagraph>}
//             <h2>{t('Welcome to Razzle')}</h2>
//         </div>
//     );
// };
export const Hello = () => {
    return (
        <div>
            {/* <Trans>This is a translation</Trans> */}
            <I18n>{t => <Trans>This is a translation</Trans>}</I18n>
        </div>
    );
};

const query = gql`
    {
        hello
    }
`;

// export default graphql(query)(Hello);
// export default compose(graphql(query), translate('translations', { wait: process && !process.release }))(Hello);
export default compose(graphql(query))(Hello);
