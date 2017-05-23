import { getAsync } from '../api/requestsFetch';

export const  getMovies = (value) => {
    const params = {
        maxResults: 10,
        key:'AIzaSyDTDL7-k0e8X_EBCOSfPcfwliRGNMpQ3mY',
        part: 'snippet',
        q: value,
        type: 'video'
    }

  return (dispatch) => {
    dispatch({
      type: 'GET_MOVIES_REQUEST'
    })
    getAsync('search',{params:params}).then(data => {
      dispatch({
      type: 'GET_MOVIES_SUCCESS',
      payload: data.data.items
    })
    }).catch( error => {
      dispatch({
      type: 'GET_MOVIES_FAILED',
      payload: error
    })
    })
  }
}