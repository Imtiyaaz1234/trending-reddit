const END_POINT = `https://www.reddit.com/r/trendingsubreddits.json`;

export const readAllPosts = (listing) => dispatch => {
  fetch(END_POINT)
    .then(response => response.json())
    .then(data =>
      {
        if(data.data.children.length > 0) {
          dispatch({
            type:'SAVE_POST',
            data: data.data.children
          })
        } else {
          dispatch({
            type:'SAVE_POST',
            data: []
          })
        }
      });
  }

export const readPost = (currentPost) => ({
  type: 'SET_POST',
  data: {
    currentPost,
  },
});

//Todo increase and reset page
export const increasePage = () => {
    return {
        type: 'INCREASE_PAGE'
    }
}

export const resetPage = () => {
    return {
        type: 'RESET_PAGE'
    }
}
