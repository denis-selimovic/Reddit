import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostVotes } from "../../actions";
import { getUser } from "../../user";
import history from "../../history";

const Rating = props => {

    const { post, upvote, downvote, fetchPostVotes, votedPosts, votes } = props;

    useEffect(() => {
        if (getUser()) fetchPostVotes();
    }, [fetchPostVotes, votes]);

    const onUpvote = () => {
        checkCredentials();
        upvote(post.id);
    };

    const onDownvote = () => {
        checkCredentials();
        downvote(post.id);
    };

    const checkCredentials = () => {
        const user = getUser();
        if (!user || !user.token) history.push("/login");
    }

    const getVoteIconColor = status => {
        let showColor = false;
        votedPosts.forEach(v => {
            if (v[0] && v[0].post === post.id && v[0].status === status) showColor = true;
        })
        return (showColor) ? 'orange' : '';
    }

    return (
        <div className="ui vertical icon buttons">
            <button onClick={onUpvote} className={`ui icon button`} style={{backgroundColor: 'white'}}>
                <i className={`${getVoteIconColor(1)} chevron up icon`}/>
            </button>
            <button disabled={true} className="ui button" style={{backgroundColor: 'white'}}>{post.rating.likes - post.rating.dislikes}</button>
            <button onClick={onDownvote} className={`ui icon button`} style={{backgroundColor: 'white'}}>
                <i className={`${getVoteIconColor(-1)} chevron down icon`}/>
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    const votedPosts = Object.values(state.votes)
    const votes = state.posts;
    return { votedPosts, votes }
};

export default connect(mapStateToProps, { fetchPostVotes })(Rating);
