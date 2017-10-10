import React from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { I18n } from 'react-i18next';
import Loading from '../Loading/Loading';

const ArticleTitle = styled.h2`
    text-transform: capitalize;
    padding: 5px;
`;
const ArticleDetails = styled.div`display: flex;`;
const Deck = styled.p`
    padding: 5px;
    width: 200px;
    display: inline-block;
`;
const ArticleImage = styled.img`
    display: inline-block;
    padding: 5px;
`;

export const Articles = props => {
    return (
        <I18n>
            {t => {
                const { data: { loading, articles } } = props; // eslint-disable-line react/prop-types
                if (loading) {
                    return <Loading />;
                }
                return (
                    <div>
                        <h1>{t('Articles')}</h1>
                        {articles.map(article => (
                            <div key={article.id}>
                                <Link to={`/${article.id}`}>
                                    <ArticleTitle>{article.title}</ArticleTitle>
                                </Link>
                                <ArticleDetails>
                                    <ArticleImage src={article.imageUrl} alt={article.title} />
                                    <Deck>{article.deck}</Deck>
                                </ArticleDetails>
                            </div>
                        ))}
                    </div>
                );
            }}
        </I18n>
    );
};

const query = gql`
    {
        articles {
            id
            title
            deck
            imageUrl
        }
    }
`;

export default graphql(query)(Articles);
