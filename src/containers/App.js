import React, { Component } from 'react';
import Search from './Search/search.js';
import MoviesList from '../components/MoviesList/moviesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onSearchChange } from '../actions/searchActions'
import { getMovies} from '../actions/moviesActions';
class App extends Component { 
    render() {

        const {value,onSearchChange,getMovies} = this.props;

        return (
            <div className="app">
                <Search value={value} getMovies={getMovies} onSearchChange={onSearchChange}/>
                <MoviesList/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.search.value,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: bindActionCreators( onSearchChange, dispatch),
        getMovies: bindActionCreators(getMovies,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);