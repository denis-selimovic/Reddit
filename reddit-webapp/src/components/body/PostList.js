import React from "react";
import Post from "./Post";

class PostList extends React.Component {

    renderPosts() {
        return this.props.posts.map(p => {
            return (
                <div className="segment" key={p.id}>
                    <Post post={p} topics={this.props.topics}/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui grid">
                <div className="four wide column"/>
                <div className="eight wide column">
                    <div className="ui vertical segments">
                        {this.renderPosts()}
                    </div>
                </div>
                <div className="four wide column"/>
            </div>
        );
    }
}

export default PostList;
