import React from 'react';
import { CardContainer, Landscape, GuyContainer, GuyIcon, H6Feeds, PFeeds } from '../styles/feedStyles'

function Feeds() {
    return (
        <CardContainer>
            <Landscape></Landscape>
            <GuyContainer>
                <GuyIcon></GuyIcon>
                <H6Feeds>r/NEEEEEEWS</H6Feeds>
            </GuyContainer>
            <PFeeds>
                Posts of Trending SubReddits for you, pulled from an API on Reddit. Subreddits of interest delivered daily.
            </PFeeds>
        </CardContainer>
    );
}

export default Feeds;
