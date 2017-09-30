import React from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const StoryContainer = styled.div`margin: 20px;`;
const StoryTitle = styled.h1`text-transform: capitalize;`;

export const Story = props => {
    const { data: { loading, story } } = props; // eslint-disable-line react/prop-types
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <StoryContainer>
            <Link to="/stories">Stories</Link>
            <StoryTitle>{story.title}</StoryTitle>
            <div>By: {story.author}</div>
            <img src={story.imageUrl} alt="" />
            <p>{story.deck}</p>
            {story.content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </StoryContainer>
    );
};

const query = gql`
    query GetStory($id: ID!) {
        story(id: $id) {
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
})(Story);
// export default Story;
