
export function getPhotos(year){
    return (dispatch) =>{
        dispatch({
            type:'GET_PHOTOS_REQUEST',
            payload:year
        })
        setTimeout(()=>{
           dispatch({
               type:'GET_PHOTOS_SUCCESS',
               payload: [8,8,8,8]
           }) 
        },1000)
    }
}