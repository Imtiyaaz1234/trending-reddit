const initialState = {
  dataList:[],
  loading: false
};


//Finishing error and begin loading
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_POST':
      return {
         dataList: action.data,
         loading: false
       };
    default:
      return state;
  }
};

export default dataReducer;
