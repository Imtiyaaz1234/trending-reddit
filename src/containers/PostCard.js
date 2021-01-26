import React, { Component } from 'react'
import { DivContainer, DivCard, H2Title, Author } from '../styles/postCardStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown/with-html';
import { readAllPosts } from '../actions';
import SidePanel from './SidePanel';

function mapStateToProps(state) {
  const { dataList } = state.dataReducer;
  return { dataList: dataList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readAllPosts }, dispatch);
}

export class PostCard extends Component {
    render() {
      return (
        <DivContainer onClick={this.props.onClick}>
          <SidePanel />
          <DivCard>
            <Author>Posted by: {this.props.author}</Author>
            <H2Title>{this.props.title}</H2Title>
            <ReactMarkdown
                source={this.props.selftext}
                escapeHtml={false}
            />
          </DivCard>
        </DivContainer>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
