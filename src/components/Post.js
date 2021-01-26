import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown/with-html';
import React from 'react';
import { MainContainerPost, PostTitle, Button, Author } from '../styles/components';
import { IconRoundLeft } from '../styles/sidePanelStyles';

function mapStateToProps(state) {
    const { currentPost } = state.postReducer
    return {
        post: currentPost
    }
}

function CurrentPost(props) {
    return (
        <div>
        <Author>Posted by: {props.post.data.currentPost.author}</Author>
        <PostTitle>{props.post.data.currentPost.title}</PostTitle>
        <ReactMarkdown
            source={props.post.data.currentPost.selftext}
            escapeHtml={false}
        />
        </div>
    )
}

export class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    render() {
        return <div>
            <MainContainerPost>
                <Button onClick={() => {this.props.history.push('/')}}><IconRoundLeft>Back</IconRoundLeft></Button>
                {this.props.post !== null ? <CurrentPost post={this.props.post} /> : ''}
            </MainContainerPost>
        </div>
    }
}

export default connect(mapStateToProps)(Post)
