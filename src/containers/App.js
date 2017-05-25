import React, { Component } from 'react';
import Search from './Search/search.js';
import VideosList from '../components/VideosList/videosList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSearchChange } from '../actions/searchActions'
import { getVideos } from '../actions/videosActions';

import '../styles/style.css'
class App extends Component { 
    render() {

        const {value,onSearchChange,getVideos,fetching,videosList} = this.props;
        return (
            <div className="app">
                <Search value={value} getVideos={getVideos} onSearchChange={onSearchChange}/>
                {fetching ? <h4>Loading...</h4>:<VideosList videosList={videosList}/>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.search.value,
        fetching: state.videos.fetching,
        videosList: state.videos.videosList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: bindActionCreators( onSearchChange, dispatch),
        getVideos: bindActionCreators(getVideos,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);