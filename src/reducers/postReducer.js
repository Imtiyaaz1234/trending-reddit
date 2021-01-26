const initialState = {
  currentPost: null,
  loading: false
};


//To do loading begin and success
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
         currentPost: action.data.currentPost,
         loading: false
       };
    default:
      return state;
  }
};

export default postReducer;
