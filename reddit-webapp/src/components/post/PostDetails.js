import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost, upvote, downvote } from "../../actions";
import Rating from "../common/Rating";
import Comment from "./Comment";

class PostDetails extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    renderComments() {
        const { comments } = this.props.post;
        return comments.map(c => <Comment comment={c}/>);
    }

    render() {
        const { post, upvote, downvote } = this.props;
        if (!post.topic || !post.user || !post.comments) return null;
        return (
            <div className="ui grid">
                <div className="four wide column"/>
                <div className="eight wide column">
                    <div className="ui icon message">
                        <Rating post={post} upvote={upvote} downvote={downvote}/>
                        <div className="content" style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <span>
                            <p>
                                <Link to={`/topic/${post.topic.id}`} style={{marginRight: '5px'}}>{`r/${post.topic.name}`}</Link>
                                Posted by <Link to={`/users/${post.user.id}`}>{`u/${post.user.username}`}</Link>
                            </p>
                        </span>
                            <h2 className="header" style={{marginBottom: '10px', marginTop: '10px'}}>{post.title}</h2>
                            <div className="text">{post.text}</div>
                            <div className="ui horizontal divider"/>
                            <div className="meta">
                                <button className="ui basic button">
                                    <i className="comment icon"/>
                                    {`${post.comments.length} comments`}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ui horizontal divider"/>
                    <div className="ui threaded comments">{this.renderComments()}</div>
                </div>
                <div className="four wide column"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { post: state.selectedPost };
};

export default connect(mapStateToProps, { fetchPost, upvote, downvote })(PostDetails);
