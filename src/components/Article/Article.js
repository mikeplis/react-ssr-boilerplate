import React from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const ArticleContainer = styled.div`margin: 20px;`;
const ArticleTitle = styled.h1`text-transform: capitalize;`;

export const Article = props => {
    const { data: { loading, article } } = props; // eslint-disable-line react/prop-types
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <ArticleContainer>
            <Link to="/">Articles</Link>
            <ArticleTitle>{article.title}</ArticleTitle>
            <div>By: {article.author}</div>
            <img src={article.imageUrl} alt="" />
            <p>{article.deck}</p>
            {article.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </ArticleContainer>
    );
};

const query = gql`
    query GetArticle($id: ID!) {
        article(id: $id) {
            id
            title
            deck
            author
            imageUrl
            content
        }
    }
`;

export default graphql(query, {
    options: ({ match }) => ({ variables: { id: match.params.id } })
})(Article);
