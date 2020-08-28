import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { upvote, downvote, subscribeToTopic, unsubscribeToTopic } from "../../actions";
import { getUser } from "../../user";
import Rating from "../common/Rating";
import ToggleButton from "../common/ToggleButton";

const Post = ({ post, upvote, downvote, subscribeToTopic, unsubscribeToTopic, topics }) => {

    const toggle = () => {
        if (!getUser()) return true;
        let show = true;
        topics.forEach(t => {
            if (t.id === post.topic.id) show = false;
        });
        return show;
    };

    const renderDeleteButton = () => {
        if (post.user.id !== getUser().id) return null;
        return (
            <Link to={`/delete/${post.topic.name}/${post.id}`} className="ui red button">Delete</Link>
        );
    };

    return (
            <div className="ui icon message" style={{backgroundColor: 'white'}}>
                <Rating post={post} upvote={upvote} downvote={downvote}/>
                <div className="content" style={{paddingLeft: '10px', paddingRight: '10px'}}>
                    <span>
                        <p>
                            <Link to={`/topic/${post.topic.id}`} style={{marginRight: '5px'}}>{`r/${post.topic.name}`}</Link>
                            Posted by <Link to={`/users/${post.user.id}`}>{`u/${post.user.username}`}</Link>
                        </p>
                    </span>
                    <Link to={`/posts/${post.id}`} className="header" style={{marginBottom: '10px', marginTop: '10px'}}>{post.title}</Link>
                    <div className="meta">
                        <Link to={`/posts/${post.id}`} className="ui basic button">
                            <i className="comment icon"/>
                            {`${post.comments.length} comments`}
                        </Link>
                        {renderDeleteButton()}
                    </div>
                </div>
                <ToggleButton text="Join" invertedText="Leave" callback={subscribeToTopic} invertedCallback={unsubscribeToTopic} toggle={toggle()} name={post.topic.name}/>
            </div>
    );
};

export default connect(null, { upvote, downvote, subscribeToTopic, unsubscribeToTopic })(Post);
