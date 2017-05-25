import React, { Component } from 'react';
import Search from './Search/search.js';
import MoviesList from '../components/MoviesList/moviesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSearchChange } from '../actions/searchActions'
import { getMovies} from '../actions/moviesActions';

import '../styles/style.css'
class App extends Component { 
    render() {

        const {value,onSearchChange,getMovies,fetching} = this.props;

        return (
            <div className="app">
                <Search value={value} getMovies={getMovies} onSearchChange={onSearchChange}/>
                {fetching ? <h4>Loading...</h4>:<MoviesList/>}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.search.value,
        fetching: state.movies.fetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: bindActionCreators( onSearchChange, dispatch),
        getMovies: bindActionCreators(getMovies,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);