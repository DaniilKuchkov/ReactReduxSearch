export function onSearchChange(payload){
    return {
        type: "SEARCH_CHANGE",
        payload
    }
}
export function onSearchSubmit(payload){
    return {
        type: "SEARCH_SUBMIT",
        payload
    }
}