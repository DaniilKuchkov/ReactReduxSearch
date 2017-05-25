const initialState = {
  fetching: false,
  videosList: [],
  error: null,
}

function videos(state=initialState,action){
    switch(action.type){
        case 'GET_VIDEOS_REQUEST':
            return Object.assign({},state,{fetching:true});
        case 'GET_VIDEOS_SUCCESS':
            return Object.assign({},state,{fetching: false, videosList: action.payload});
        case 'GET_VIDEOS_FAILED':
            return Object.assign({},state,{fetching: false, error:`Some Error!`});
        default:
            return state;
    }
}
export default videos;