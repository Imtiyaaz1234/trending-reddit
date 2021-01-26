import React from 'react';
import { Card, IconRose, DivText, H6Title } from '../styles/redditPremiumStyle'


function RedditPremium() {
    return (
        <Card>
            <IconRose />
            <DivText>
                <H6Title>Reddit Premium</H6Title>
                <p>The best Reddit experience, with monthly Coins</p>
            </DivText>
        </Card>
    );
}

export default RedditPremium;
