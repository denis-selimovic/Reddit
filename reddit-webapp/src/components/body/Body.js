import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostFilter from "./PostFilter";
import PostList from './PostList';
import { fetchPostVotes } from "../../actions";
import { getUser } from "../../user";

const Body = props => {

    const { fetchPostVotes, votes } = props;

    useEffect(() => {
        if (getUser()) fetchPostVotes();
    }, [fetchPostVotes, votes]);

    return (
        <div className="ui container" style={{backgroundColor: '#d1d7e8'}}>
            <PostFilter/>
            <div className="ui horizontal divider"/>
            <PostList/>
        </div>
    );

}

const mapStateToProps = state => {
    return { votes: state.votes };
};

export default connect(mapStateToProps, { fetchPostVotes })(Body);
