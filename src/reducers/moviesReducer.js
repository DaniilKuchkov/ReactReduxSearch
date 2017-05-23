const initialState = {
  fetching: false,
  movies: [],
  error: null
}

function movies(state=initialState,action){
    switch(action.type){
        case 'GET_MOVIES_REQUEST':
            return Object.assign({},state,{fetching:true});
        case 'GET_MOVIES_SUCCESS':
            return Object.assign({},state,{fetching: false, movies: action.payload});
        case 'GET_MOVIES_FAILED':
            return Object.assign({},state,{fetching: false, error:`Some Error!`});
        default:
            return state;
    }
}
export default movies;