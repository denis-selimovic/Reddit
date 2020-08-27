import React from "react";
import { getUser } from "../../user";
import history from "../../history";

const Rating = props => {

    const { post, upvote, downvote, votes} = props;

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
        votes.forEach(v => {
            if (v.post === post.id && v.status === status) showColor = true;
        })
        return (showColor && getUser()) ? 'orange' : '';
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


export default Rating;
