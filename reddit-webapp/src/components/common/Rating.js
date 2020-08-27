import React from "react";
import { getUser } from "../../user";
import history from "../../history";

export default ({ post, upvote, downvote }) => {

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

    return (
        <div className="ui vertical icon buttons">
            <button onClick={onUpvote} className="ui icon button" style={{backgroundColor: 'white'}}>
                <i className="chevron up icon"/>
            </button>
            <button disabled={true} className="ui button" style={{backgroundColor: 'white'}}>{post.rating.likes - post.rating.dislikes}</button>
            <button onClick={onDownvote} className="ui icon button" style={{backgroundColor: 'white'}}>
                <i className="chevron down icon"/>
            </button>
        </div>
    );
}

