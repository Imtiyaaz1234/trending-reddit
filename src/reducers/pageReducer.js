const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREASE_PAGE':
            return state + 1
        case 'RESET_PAGE':
            return 1
        default:
            return state
    }
}

export default pageReducer;
