import React from 'react';
import PostFilter from "./PostFilter";
import PostList from './PostList';

class Body extends React.Component {
    render() {
        return (
            <div className="ui container">
                <PostFilter/>
                <div className="ui horizontal divider"/>
                <PostList/>
            </div>
        );
    }
}

export default Body;
