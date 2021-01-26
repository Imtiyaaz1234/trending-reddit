import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readAllPosts, readPost, increasePage, resetPage } from '../actions';
import { Spin } from "antd";
import { MainContainer } from '../styles/listStyle';
import PostCard from '../containers/PostCard';
import InfiniteScroll from "react-infinite-scroll-component";

function mapStateToProps(state) {
  const { dataList } = state.dataReducer;
  return { dataList: dataList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ readAllPosts, readPost: readPost, increasePage, resetPage }, dispatch);
}

export class PostList extends Component {

  componentDidMount() {
    this.props.readAllPosts();
  }

  render() {
    const { dataList } = this.props;
    let data = dataList.length;

    let loadingDialog;
    if (!dataList) {
          loadingDialog = (<div style={{ textAlign: "center" }}>
              <Spin size="large" tip="Loading..." />
            </div>)
        }

    return (
      <div>
      { loadingDialog }
      <MainContainer>
      <InfiniteScroll
        pullDownToRefresh
        refreshFunction={resetPage}
        next={increasePage}
        dataLength={data}
        hasMore={true}
        loader={ <div style={{ textAlign: "center" }}>
            <Spin size="large" tip="" />
          </div>}
      >
       { dataList.map((post, index) => {
          return  <PostCard key={index}
          title={post.data.title}
          author={post.data.author}
          selftext={post.data.selftext}
          onClick={()=>
          {
              this.props.readPost(readPost(post.data))
              this.props.history.push('/post')
          }}
          />
        })}
        </InfiniteScroll>
        </MainContainer>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
