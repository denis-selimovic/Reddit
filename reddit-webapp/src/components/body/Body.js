import React from 'react';
import PostFilter from "./PostFilter";
import PostList from './PostList';

class Body extends React.Component {
    render() {
        return (
            <div className="ui container" style={{backgroundColor: '#d1d7e8'}}>
                <PostFilter/>
                <div className="ui horizontal divider"/>
                <PostList/>
            </div>
        );
    }
}

export default Body;
