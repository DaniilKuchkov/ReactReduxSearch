import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Search extends Component {
    render() {

        const {value,onSearchChange, getVideos} = this.props;

        return (
                <form className="search" onSubmit={(e)=> {
                    e.preventDefault();
                    getVideos(value);
                    browserHistory.push("/movies")
                }}>
                    <input type="text" value={value} onChange={(e)=> onSearchChange(e.target.value)}/>
                    <input type="submit" value="Submit"/>
                </form>
        );
    }
}

export default Search;