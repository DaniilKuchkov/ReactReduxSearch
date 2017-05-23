const initialState = {
    value:'',
}

function search(state=initialState,action){
    switch(action.type){
        case 'SEARCH_CHANGE':
            return Object.assign({},state,{value:action.payload});
        default:
            return state;
    }
}
export default search;