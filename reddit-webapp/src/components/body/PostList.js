import React from "react";
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions";
import Post from "./Post";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.stream.map(p => {
            return (
                <div className="item">
                    <Post post={p}/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
