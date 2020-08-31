import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { upvoteComment, downvoteComment } from "../../actions";
import Rating from "../common/Rating";

const Comment = ({ comment, upvoteComment, downvoteComment }) => {

    const renderComment = c => {

        const to = {
            pathname: `/comments/reply/${c.id}`,
            search: `?post=${c.post.id}`
        }

        return (
            <div className="comment" style={{height: '80px'}}>
                <div className="content">
                    <div className="avatar" style={{height: '70px', marginTop: '-20px', marginRight: '20px'}}>
                        <Rating id={comment.id} upvote={upvoteComment} downvote={downvoteComment} status={comment.rating.likes - comment.rating.dislikes}/>
                    </div>
                    <Link to={`/users/${c.user.id}`} className="author">{`u/${c.user.username}`}</Link>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">{c.text}</div>
                    <div className="actions">
                        <Link to={to} className="reply" style={{color: 'grey', cursor: 'pointer'}}>Reply</Link>
                    </div>

                </div>
                {c.children.length > 0 ? renderCommentWithReplies(c.comments) : null}
            </div>
        );
    };

    const renderCommentWithReplies = replies => {
        const renderedReplies = replies.map(r => renderComment(r));
        return <div className="comments">{renderedReplies}</div>;
    };

    return renderComment(comment);
};

export default connect(null, { upvoteComment, downvoteComment })(Comment);
