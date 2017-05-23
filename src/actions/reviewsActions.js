export function addReview(payload){
    return {
        type: 'ADD_REVIEW',
        payload
    }
}
export function showAllReviews(){
    return {
        type: 'SHOW_ALL_REVIEWS'
    }
}
export function changeName(payload){
    return {
        type: 'CHANGE_NAME',
        payload
    }
}
export function changeText(payload){
    return {
        type: 'CHANGE_TEXT',
        payload
    }
}