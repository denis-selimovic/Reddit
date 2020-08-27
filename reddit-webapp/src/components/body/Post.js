import React from "react";
import { Link } from 'react-router-dom';

export default ({ post }) => {
    return (
            <div className="ui icon message" style={{backgroundColor: 'white'}}>
                <div className="ui vertical icon buttons">
                    <button className="ui icon button" style={{backgroundColor: 'white'}}>
                        <i className="chevron up icon"/>
                    </button>
                    <button className="ui icon button" style={{backgroundColor: 'white'}}>
                        <i className="chevron down icon"/>
                    </button>
                </div>
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
                    </div>
                </div>
                <button className="ui right floated primary button">Join</button>
            </div>
    );
};
