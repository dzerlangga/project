

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
     if (action.type === "setApi") {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;