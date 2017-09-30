import React from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const StoryTitle = styled.h2`
    text-transform: capitalize;
    padding: 5px;
`;
const StoryDetails = styled.div`display: flex;`;
const Deck = styled.p`
    padding: 5px;
    width: 200px;
    display: inline-block;
`;
const StoryImage = styled.img`
    display: inline-block;
    padding: 5px;
`;

export const Stories = props => {
    const { data: { loading, stories } } = props; // eslint-disable-line react/prop-types
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Stories</h1>
            {stories.map(story => (
                <div key={story.id}>
                    <Link to={`/stories/${story.id}`}>
                        <StoryTitle>{story.title}</StoryTitle>
                    </Link>
                    <StoryDetails>
                        <StoryImage src={story.imageUrl} alt={story.title} />
                        <Deck>{story.deck}</Deck>
                    </StoryDetails>
                </div>
            ))}
        </div>
    );
};

const query = gql`
    {
        stories {
            id
            title
            deck
            imageUrl
        }
    }
`;

export default graphql(query)(Stories);
