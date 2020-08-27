import React from "react";
import { connect } from 'react-redux';
import { fetchPosts, fetchTopics } from "../../actions";
import { getUser } from "../../user";
import Post from "./Post";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
        if(getUser()) this.props.fetchTopics();
    }

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

const mapStateToProps = state => {
    return { posts: Object.values(state.posts), topics: Object.values(state.userTopics) };
}

export default connect(mapStateToProps, { fetchPosts, fetchTopics })(PostList);
