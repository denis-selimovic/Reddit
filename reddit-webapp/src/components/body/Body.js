import React, { useEffect } from 'react';
import PostFilter from "./PostFilter";
import PostList from './PostList';

const Body = props => {

    return (
        <div className="ui container" style={{backgroundColor: '#d1d7e8'}}>
            <PostFilter/>
            <div className="ui horizontal divider"/>
            <PostList/>
        </div>
    );

}

export default Body;
