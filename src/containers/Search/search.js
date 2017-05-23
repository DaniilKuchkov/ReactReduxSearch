import React, { Component } from 'react';

class Search extends Component {
    render() {

        const {value,onSearchChange, getMovies} = this.props;

        return (
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    getMovies(value);
                }}>
                    <input type="text" value={value} onChange={(e)=> onSearchChange(e.target.value)}/>
                    <input type="submit" value="Submit"/>
                </form>
        );
    }
}

export default Search;