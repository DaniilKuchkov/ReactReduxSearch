import React, { Component } from 'react';
import Item from './item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { onMovieChoose } from '../../actions/moviesActions';
class MoviesList extends Component {
  render() {
    const { moviesList, onMovieChoose} = this.props;
    return (
      <ul className="media-list">
      {moviesList.map((video) => {
        return <Item  
          video={video} 
          key={video.etag} 
          onMovieChoose={onMovieChoose}
          />
      })}
    </ul>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    moviesList: state.movies.movies,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    onMovieChoose: bindActionCreators( onMovieChoose, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MoviesList)