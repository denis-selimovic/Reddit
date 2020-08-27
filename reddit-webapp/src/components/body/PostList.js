import React from "react";
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions";
import Post from "./Post";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map(p => {
            return (
                <div className="segment" key={p.id}>
                    <Post post={p}/>
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
    return { posts: Object.values(state.posts) };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
