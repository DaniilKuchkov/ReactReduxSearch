import { getAsync } from '../api/requestsFetch';
import { PARAMS } from '../const/consts';

export function getVideos(value){
  PARAMS.q = value;
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEOS_REQUEST'
    })
    getAsync('search',{params:PARAMS}).then(data => {
      dispatch({
      type: 'GET_VIDEOS_SUCCESS',
      payload: data.data.items
    })
    }).catch( error => {
      dispatch({
      type: 'GET_VIDEOS_FAILED',
      payload: error
    })
    })
  }
}
